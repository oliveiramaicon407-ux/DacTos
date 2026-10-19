package CTI.BackEnd.controller;

import CTI.BackEnd.dto.PlanilhaRequestDTO;
import CTI.BackEnd.model.Cliente;
import CTI.BackEnd.model.Consultor;
import CTI.BackEnd.repository.ClienteRepository;
import CTI.BackEnd.repository.ConsultorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/planilha")
@CrossOrigin(origins = "*")
public class PlanilhaController {

    private final ConsultorRepository consultorRepository;
    private final ClienteRepository clienteRepository;

    public PlanilhaController(
            ConsultorRepository consultorRepository,
            ClienteRepository clienteRepository
    ) {
        this.consultorRepository = consultorRepository;
        this.clienteRepository = clienteRepository;
    }

    @PostMapping("/importar")
    @Transactional
    public ResponseEntity<?> importarPlanilha(
            @RequestBody PlanilhaRequestDTO request
    ) {

        try {

            if (request.getDados() == null || request.getDados().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body("A planilha não possui dados.");
            }

            int consultoresCriados = 0;
            int clientesCriados = 0;
            int clientesJaExistentes = 0;

            for (Map<String, Object> linha : request.getDados()) {

                String nomeCliente = String.valueOf(
                        linha.getOrDefault("nome_cliente", "")
                ).trim();

                String nomeConsultor = String.valueOf(
                        linha.getOrDefault("consultor", "")
                ).trim();

                if (nomeCliente.isEmpty()) {
                    return ResponseEntity.badRequest()
                            .body("Existe uma linha sem nome_cliente.");
                }

                if (nomeConsultor.isEmpty()) {
                    return ResponseEntity.badRequest()
                            .body("Existe uma linha sem consultor.");
                }

                // Procura o consultor pelo nome.
                // Se não existir, cria automaticamente.
                Consultor consultor = consultorRepository
                        .findByNomeIgnoreCase(nomeConsultor)
                        .orElse(null);

                if (consultor == null) {

                    consultor = new Consultor();
                    consultor.setNome(nomeConsultor);

                    String matricula = "AUTO-" +
                            UUID.randomUUID()
                                    .toString()
                                    .substring(0, 8)
                                    .toUpperCase();

                    consultor.setMatricula(matricula);

                    consultor = consultorRepository.save(consultor);

                    consultoresCriados++;
                }

                // Verifica se o cliente já existe para esse consultor.
                boolean clienteExiste = clienteRepository
                        .findByNomeAndConsultor(nomeCliente, consultor)
                        .isPresent();

                if (clienteExiste) {
                    clientesJaExistentes++;
                    continue;
                }

                // Cria o cliente e relaciona com o consultor.
                Cliente cliente = new Cliente();
                cliente.setNome(nomeCliente);
                cliente.setConsultor(consultor);

                clienteRepository.save(cliente);

                clientesCriados++;
            }

            String resposta =
                    "Planilha processada com sucesso! " +
                    "Consultores criados: " + consultoresCriados +
                    " | Clientes criados: " + clientesCriados +
                    " | Clientes já existentes: " + clientesJaExistentes;

            return ResponseEntity.ok(resposta);

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.internalServerError()
                    .body("Erro ao salvar os dados da planilha: "
                            + e.getMessage());
        }
    }
}