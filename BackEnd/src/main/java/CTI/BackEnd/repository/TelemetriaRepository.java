package CTI.BackEnd.repository;

import CTI.BackEnd.model.Telemetria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TelemetriaRepository extends JpaRepository<Telemetria, Long> {
}