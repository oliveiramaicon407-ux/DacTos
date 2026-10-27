
package CTI.BackEnd.service;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class PythonEtlService {

    private final RestTemplate restTemplate;

    public PythonEtlService() {
        this.restTemplate = new RestTemplate();
    }

    public Map<?, ?> analisarDados(List<Map<String, Object>> dados) {
        String url = "http://127.0.0.1:8001/analisar";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> corpo = Map.of("dados", dados);
        HttpEntity<Map<String, Object>> requisicao =
                new HttpEntity<>(corpo, headers);

        ResponseEntity<Map> resposta = restTemplate.exchange(
                url,
                HttpMethod.POST,
                requisicao,
                Map.class
        );

        return resposta.getBody();
    }
}
