
package CTI.BackEnd.service;

import CTI.BackEnd.model.Cliente;
import CTI.BackEnd.repository.ClienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    // Listar todos os clientes
    public List<Cliente> listarTodos() {
        return clienteRepository.findAll();
    }

    // Buscar cliente pelo ID
    public Optional<Cliente> buscarPorId(Long id) {
        return clienteRepository.findById(id);
    }

    // Cadastrar ou salvar cliente
    public Cliente salvar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    // Atualizar cliente existente
    public Optional<Cliente> atualizar(Long id, Cliente clienteAtualizado) {
        return clienteRepository.findById(id).map(cliente -> {
            cliente.setNome(clienteAtualizado.getNome());
            cliente.setConsultor(clienteAtualizado.getConsultor());
            return clienteRepository.save(cliente);
        });
    }

    // Excluir cliente
    public boolean deletar(Long id) {
        if (!clienteRepository.existsById(id)) {
            return false;
        }

        clienteRepository.deleteById(id);
        return true;
    }
}
