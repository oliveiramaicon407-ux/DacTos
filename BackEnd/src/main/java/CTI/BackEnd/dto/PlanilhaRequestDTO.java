package CTI.BackEnd.dto;

import java.util.List;
import java.util.Map;

public class PlanilhaRequestDTO {
    private String nomeArquivo;
    private List<Map<String, Object>> dados;

    // Getters e Setters
    public String getNomeArquivo() {
        return nomeArquivo;
    }

    public void setNomeArquivo(String nomeArquivo) {
        this.nomeArquivo = nomeArquivo;
    }

    public List<Map<String, Object>> getDados() {
        return dados;
    }

    public void setDados(List<Map<String, Object>> dados) {
        this.dados = dados;
    }
}