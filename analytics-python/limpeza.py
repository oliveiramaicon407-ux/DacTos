
import pandas as pd
import re
import unicodedata


def normalizar_texto(valor):
    """Remove espaços desnecessários e normaliza textos."""

    if valor is None:
        return ""

    texto = str(valor).strip()
    texto = re.sub(r"\s+", " ", texto)

    return texto


def normalizar_segmento(valor):
    """Padroniza os nomes dos segmentos de clientes."""

    texto = normalizar_texto(valor).upper()

    # Remove acentos para facilitar a comparação.
    texto_sem_acento = "".join(
        caractere
        for caractere in unicodedata.normalize("NFD", texto)
        if unicodedata.category(caractere) != "Mn"
    )

    segmentos = {
        "IND": "Indústria",
        "IND.": "Indústria",
        "VAREJO": "Varejo",
        "INDUSTRIA": "Indústria",
        "COMERCIO": "Comércio",
        "SERVICOS": "Serviços",
        "SAUDE": "Saúde",
        "TECNOLOGIA": "Tecnologia",
        "EDUCACAO": "Educação",
    }

    return segmentos.get(texto_sem_acento, "Não Definido")


def normalizar_nivel(valor):
    """Padroniza o nível do cliente."""

    nivel = normalizar_texto(valor).upper()

    return nivel if nivel else "Não Definido"


def converter_faturamento(valor):
    """
    Converte faturamento brasileiro para número.

    Exemplos:
    '2.204.102,56' -> 2204102.56
    'R$ 2.204.102,56' -> 2204102.56
    2204102.56 -> 2204102.56
    """

    if valor is None or valor == "":
        return 0.0

    if isinstance(valor, (int, float)):
        return float(valor) if pd.notna(valor) else 0.0

    texto = normalizar_texto(valor)
    texto = texto.replace("R$", "").replace(" ", "")

    if not texto:
        return 0.0

    # Formato brasileiro: 2.204.102,56
    if "," in texto:
        texto = texto.replace(".", "").replace(",", ".")

    try:
        numero = float(texto)

        if not pd.notna(numero):
            return 0.0

        return numero

    except (ValueError, TypeError):
        return 0.0


def limpar_dados(dados):
    """
    Recebe uma lista de clientes, limpa os campos
    e devolve uma lista pronta para análise.

    Esta função não grava nada no banco de dados.
    """

    if not dados:
        return []

    df = pd.DataFrame(dados)

    # Normaliza os nomes das colunas.
    df.columns = [
        normalizar_texto(coluna).lower()
        for coluna in df.columns
    ]

    # Limpa campos textuais conhecidos.
    colunas_texto = [
        "codigo_cliente",
        "nome_cliente",
        "consultor",
        "cidade",
        "uf",
        "servicos_contratados",
    ]

    for coluna in colunas_texto:
        if coluna in df.columns:
            df[coluna] = df[coluna].apply(normalizar_texto)

    # Padroniza os segmentos.
    if "segmento" in df.columns:
        df["segmento"] = df["segmento"].apply(
            normalizar_segmento
        )

    # Padroniza os níveis.
    if "nivel_cliente" in df.columns:
        df["nivel_cliente"] = df["nivel_cliente"].apply(
            normalizar_nivel
        )

    # Converte o faturamento para número.
    if "faturamento_anual" in df.columns:
        df["faturamento_anual"] = df[
            "faturamento_anual"
        ].apply(converter_faturamento)

    # Padroniza datas sem descartar valores inválidos.
    if "data_contratacao" in df.columns:
        df["data_contratacao"] = df[
            "data_contratacao"
        ].apply(normalizar_texto)

    # Evita valores NaN no resultado JSON.
    df = df.astype(object).where(pd.notna(df), None)

    return df.to_dict(orient="records")
