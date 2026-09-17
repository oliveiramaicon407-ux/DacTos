package CTI.BackEnd.repository;

import CTI.BackEnd.model.Insight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InsightRepository extends JpaRepository<Insight, Long> {
}