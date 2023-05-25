def verificar_tipo_triangulo(lado1, lado2, lado3):
    if (
        lado1 + lado2 <= lado3
        or lado1 + lado3 <= lado2
        or lado2 + lado3 <= lado1
    ):
        return "Não é triângulo"
    elif lado1 == lado2 == lado3:
        return "Triângulo equilátero"
    elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
        return "Triângulo isósceles"
    else:
        return "Triângulo escaleno"


lado1 = float(input("Digite o valor do lado 1: "))
lado2 = float(input("Digite o valor do lado 2: "))
lado3 = float(input("Digite o valor do lado 3: "))

tipo_triangulo = verificar_tipo_triangulo(lado1, lado2, lado3)
print("Tipo de triângulo:", tipo_triangulo)
