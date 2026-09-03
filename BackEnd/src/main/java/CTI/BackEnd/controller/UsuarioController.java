package CTI.BackEnd.controller;

import CTI.BackEnd.dto.UsuarioDTO;
import CTI.BackEnd.model.Usuario;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @PostMapping
    public Usuario criar(@Valid @RequestBody UsuarioDTO usuarioDTO) {
        // Lógica para criar um novo usuário
        return new Usuario();
    }

    @GetMapping
    public List<Usuario> listar() {
        // Lógica para listar todos os usuários
        return new ArrayList<>();
    }

    @PutMapping("/{id}")
    public Usuario atualizar(
        @PathVariable Long id,
        @RequestBody UsuarioDTO usuarioDTO
    ) {
        // Lógica para atualizar um usuário existente
        return new Usuario();
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        // Lógica para deletar um usuário existente
    }
}