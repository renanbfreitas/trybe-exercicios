# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
def imprimir_quadrado(n):
    for i in range(n):
        for j in range(n):
            print('*', end=' ')
        print()


valor = int(input("Digite o valor de n: "))
if valor > 1:
    imprimir_quadrado(valor)
else:
    print("O valor de n precisa ser maior que 1.")
