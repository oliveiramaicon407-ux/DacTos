
from fastapi import FastAPI

app = FastAPI(
    title="DacTos Python API",
    description="API de processamento e análise de dados do DacTos",
    version="1.0.0"
)


@app.get("/")
def inicio():
    return {
        "mensagem": "API Python do DacTos funcionando!",
        "status": "online"
    }


@app.get("/saude")
def verificar_saude():
    return {
        "status": "ok",
        "servico": "PythonService"
    }
