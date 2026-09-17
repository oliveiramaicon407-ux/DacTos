package CTI.BackEnd.repository;

import CTI.BackEnd.model.Consultor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultorRepository extends JpaRepository<Consultor, Long> {
}