package CTI.BackEnd.service;

import CTI.BackEnd.model.Consultor;
import CTI.BackEnd.repository.ConsultorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConsultorService {

    @Autowired
    private ConsultorRepository consultorRepository;

    public List<Consultor> listarTodos() {
        return consultorRepository.findAll();
    }

    public Optional<Consultor> buscarPorId(Long id) {
        return consultorRepository.findById(id);
    }

    public Consultor salvar(Consultor consultor) {
        return consultorRepository.save(consultor);
    }

    public void deletar(Long id) {
        consultorRepository.deleteById(id);
    }
}