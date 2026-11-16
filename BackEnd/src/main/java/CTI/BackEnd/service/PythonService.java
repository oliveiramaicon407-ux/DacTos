
package CTI.BackEnd.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class PythonService {

    private final RestTemplate restTemplate;

    public PythonService() {
        this.restTemplate = new RestTemplate();
    }

    public Map<?, ?> verificarSaude() {
        String url = "https://dactos-python-api-h6bjghgvf2cxabag.southafricanorth-01.azurewebsites.net/saude";

        return restTemplate.getForObject(url, Map.class);
    }
}
