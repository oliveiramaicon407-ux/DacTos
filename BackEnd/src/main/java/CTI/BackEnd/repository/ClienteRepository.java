package CTI.BackEnd.repository;

import CTI.BackEnd.model.Cliente;
import CTI.BackEnd.model.Consultor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    Optional<Cliente> findByNomeAndConsultor(
            String nome,
            Consultor consultor
    );
}