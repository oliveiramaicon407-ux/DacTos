package CTI.BackEnd.repository;

import CTI.BackEnd.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Método customizado para buscar por email (caso precise na regra de login)
    Optional<Usuario> findByEmail(String email);

}