
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from limpeza import limpar_dados
from analise import analisar_dados
from insights import gerar_insights

app = FastAPI(
    title="DacTos - API de Análise de Dados",
    description="API para limpeza, análise e geração de insights.",
    version="1.0.0",
)


class DadosEntrada(BaseModel):
    dados: list[dict]


@app.get("/")
def inicio():
    return {
        "mensagem": "API de análise do DacTos funcionando!"
    }


@app.get("/saude")
def verificar_saude():
    return {"status": "online"}


@app.post("/analisar")
def analisar_planilha(entrada: DadosEntrada):
    try:
        if not entrada.dados:
            raise HTTPException(
                status_code=400,
                detail="Nenhum dado foi enviado para análise.",
            )

        dados_limpos = limpar_dados(entrada.dados)
        resultado = analisar_dados(dados_limpos)
        resultado["insights"] = gerar_insights(resultado)

        return {
            "sucesso": True,
            "analise": resultado,
        }

    except HTTPException:
        raise

    except Exception as erro:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao analisar os dados: {str(erro)}",
        ) from erro
