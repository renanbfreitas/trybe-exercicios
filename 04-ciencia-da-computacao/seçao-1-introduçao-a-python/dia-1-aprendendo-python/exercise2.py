# Calcule a média aritmética dos valores contidos em uma lista.
def calcular_media(lista):
    total = sum(lista)
    quantidade = len(lista)
    media = total / quantidade
    return media


valores = [10, 20, 30, 40, 50]
media = calcular_media(valores)
print(media)
