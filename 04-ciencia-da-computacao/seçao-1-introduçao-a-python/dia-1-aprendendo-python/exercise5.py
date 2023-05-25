# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo
# a quantidade de latas de tinta a serem compradas e
# o preço total a partir do tamanho de uma parede (em m²).
import math


def calcular_quantidade_e_preco_tinta(tamanho_parede):
    cobertura_litro = 3
    capacidade_lata = 18
    preco_lata = 80.0

    quantidade_latas = tamanho_parede / cobertura_litro / capacidade_lata
    quantidade_latas = math.ceil(quantidade_latas)

    preco_total = quantidade_latas * preco_lata

    return quantidade_latas, preco_total


tamanho_parede = float(input
                       ("Digite o tamanho da parede em metros quadrados: "))

quantidade_latas, preco_total = calcular_quantidade_e_preco_tinta
(tamanho_parede)
print("Quantidade de latas de tinta: ", quantidade_latas)
print("Preço total: R$", preco_total)
