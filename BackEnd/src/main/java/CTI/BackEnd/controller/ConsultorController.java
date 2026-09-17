package CTI.BackEnd.controller;

import CTI.BackEnd.model.Consultor;
import CTI.BackEnd.service.ConsultorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consultores")
public class ConsultorController {

    @Autowired
    private ConsultorService consultorService;

    @GetMapping
    public List<Consultor> listar() {
        return consultorService.listarTodos();
    }

    @PostMapping
    public Consultor criar(@RequestBody Consultor consultor) {
        return consultorService.salvar(consultor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        consultorService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
