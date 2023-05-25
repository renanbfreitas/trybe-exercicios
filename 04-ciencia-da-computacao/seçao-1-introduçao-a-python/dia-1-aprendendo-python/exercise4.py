# Crie uma função que receba uma lista de nomes e
# retorne o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".

def encontrar_maior_nome(lista_nomes):
    nome_maior = ''
    for nome in lista_nomes:
        if len(nome) > len(nome_maior):
            nome_maior = nome
    return nome_maior


nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
nome_maior = encontrar_maior_nome(nomes)
print(nome_maior)
