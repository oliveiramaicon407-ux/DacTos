package CTI.BackEnd.repository;

import CTI.BackEnd.model.Consultor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConsultorRepository extends JpaRepository<Consultor, Long> {

    Optional<Consultor> findByNomeIgnoreCase(String nome);
}