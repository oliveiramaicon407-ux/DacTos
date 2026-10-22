
package CTI.BackEnd.controller;

import CTI.BackEnd.service.PythonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/python")
public class PythonController {

    private final PythonService pythonService;

    public PythonController(PythonService pythonService) {
        this.pythonService = pythonService;
    }

    @GetMapping("/saude")
    public ResponseEntity<Map<?, ?>> verificarSaude() {
        Map<?, ?> resposta = pythonService.verificarSaude();
        return ResponseEntity.ok(resposta);
    }
}
