package CTI.BackEnd.repository;

import CTI.BackEnd.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Método customizado para buscar por email (caso precise na regra de login)
    Optional<Usuario> findByEmail(String email);

}