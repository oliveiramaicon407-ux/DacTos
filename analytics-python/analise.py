
def analisar_dados(dados):
    """
    Calcula indicadores a partir de uma lista de clientes
    já limpa pelo módulo limpeza.py.
    """

    if not dados:
        return {
            "total_clientes": 0,
            "faturamento_total": 0.0,
            "faturamento_medio": 0.0,
            "clientes_nivel_a": 0,
            "distribuicao_niveis": {},
            "distribuicao_segmentos": {},
            "segmento_principal": None,
        }

    total_clientes = len(dados)

    faturamentos = [
        float(cliente.get("faturamento_anual") or 0)
        for cliente in dados
    ]

    faturamento_total = sum(faturamentos)
    faturamento_medio = faturamento_total / total_clientes

    clientes_nivel_a = sum(
        1
        for cliente in dados
        if str(cliente.get("nivel_cliente", "")).upper() == "A"
    )

    distribuicao_niveis = {}
    distribuicao_segmentos = {}

    for cliente in dados:
        nivel = cliente.get("nivel_cliente") or "Não Definido"
        segmento = cliente.get("segmento") or "Não Definido"

        distribuicao_niveis[nivel] = (
            distribuicao_niveis.get(nivel, 0) + 1
        )

        distribuicao_segmentos[segmento] = (
            distribuicao_segmentos.get(segmento, 0) + 1
        )

    segmento_principal = (
        max(distribuicao_segmentos, key=distribuicao_segmentos.get)
        if distribuicao_segmentos
        else None
    )

    return {
        "total_clientes": total_clientes,
        "faturamento_total": round(faturamento_total, 2),
        "faturamento_medio": round(faturamento_medio, 2),
        "clientes_nivel_a": clientes_nivel_a,
        "distribuicao_niveis": distribuicao_niveis,
        "distribuicao_segmentos": distribuicao_segmentos,
        "segmento_principal": segmento_principal,
    }
