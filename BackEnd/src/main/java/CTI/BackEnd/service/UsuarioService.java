package CTI.BackEnd.service;

import CTI.BackEnd.model.Usuario;
import CTI.BackEnd.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    // Listar todos os usuários
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    // Buscar usuário por ID
    public Optional<Usuario> buscarPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    // Salvar novo usuário
    public Usuario salvar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Atualizar usuário existente
    public Usuario atualizar(Long id, Usuario usuarioAtualizado) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setNome(usuarioAtualizado.getNome());
            usuario.setEmail(usuarioAtualizado.getEmail());
            return usuarioRepository.save(usuario);
        }).orElseGet(() -> {
            usuarioAtualizado.setId(id);
            return usuarioRepository.save(usuarioAtualizado);
        });
    }

    // Deletar usuário por ID
    public void deletar(Long id) {
        usuarioRepository.deleteById(id);
    }
}