# Crie uma função que receba dois números e retorne o maior deles.
def encontrar_maior_numero(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


maior = encontrar_maior_numero(2, 8)
print(maior)
