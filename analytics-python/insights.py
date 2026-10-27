
def gerar_insights(analise):
    """
    Gera frases explicativas a partir dos indicadores
    calculados pelo módulo analise.py.
    """
    total = analise.get("total_clientes", 0)
    faturamento = analise.get("faturamento_total", 0)
    media = analise.get("faturamento_medio", 0)
    nivel_a = analise.get("clientes_nivel_a", 0)
    segmento_principal = analise.get("segmento_principal")

    if total == 0:
        return ["Ainda não existem dados suficientes para gerar análises."]

    insights = []
    percentual_nivel_a = (nivel_a / total) * 100

    insights.append(
        f"A base analisada possui {total} clientes."
    )

    faturamento_formatado = f"R$ {faturamento:,.2f}"
    faturamento_formatado = (
        faturamento_formatado.replace(",", "X")
        .replace(".", ",")
        .replace("X", ".")
    )

    media_formatada = f"R$ {media:,.2f}"
    media_formatada = (
        media_formatada.replace(",", "X")
        .replace(".", ",")
        .replace("X", ".")
    )

    insights.append(
        f"O faturamento anual total é de {faturamento_formatado}."
    )

    insights.append(
        f"O faturamento médio por cliente é de {media_formatada}."
    )

    insights.append(
        f"{nivel_a} cliente(s) estão classificados no nível A "
f" ({percentual_nivel_a:.1f}% da base)."
    )

    if segmento_principal:
        insights.append(
            f"O segmento com maior número de clientes é "
            f"{segmento_principal}."
        )

    return insights
