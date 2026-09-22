package CTI.BackEnd.controller;

import CTI.BackEnd.dto.PlanilhaRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/planilha")
@CrossOrigin(origins = "*")
public class PlanilhaController {

    @PostMapping("/importar")
    public ResponseEntity<?> importarPlanilha(@RequestBody PlanilhaRequestDTO request) {
        try {
            System.out.println("Arquivo recebido: " + request.getNomeArquivo());
            System.out.println("Total de linhas recebidas: " + request.getDados().size());

            return ResponseEntity.ok().body("Planilha processada e recebida com sucesso no backend!");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro ao processar planilha: " + e.getMessage());
        }
    }
}