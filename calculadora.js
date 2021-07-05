/*
Desenvolver Calculadora de Alcance de anúncio.

sendo que a cada 100 pessoas que visualizam o anúncio 12 clicam nele, ou seja, "12/100 = 0,12 clicam"
a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais, ou seja "3/20 = 0,15 compartilham"
cada compartilhamento nas redes sociais gera 40 novas visualizações.
30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)

Cálculo para encontrar projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio por cada R$ 1,00 investido:

Investimento: R$ 1,00
visualização inicial (visualiza1): 30 (conforme enunciado)
Clica1: 30*0,12 (porc_clica) = 3,6
Compart1: 3,6*0,15 (Clica1*porc_compartilha) = 0,54
Visualiza2: 0,54 * 40 = 21,6
Clica2: 21,6 * 0,12 = 2,592
Compartilha2: 2,592* 0,15 = 0,3888
Visualiza3: 0,3888 * 40 = 15,552
Clica3: 15,552 * 0,12 = 1,86624
Compartilha3: 1,86624 * 0,15 = 0,279936
Visualiza4: 0,279936 * 40 = 11,19744
Total de visualizações por zcada R$1,00 investido: 30 + 21,6 + 15,552 + 11,19744 = 78,34944
(visualiza1 + Visualiza2 + Visualiza3 + Visualiza4)


*/



var investimento = Number(window.prompt("Qual valor deseja investir? (somente Números)"))
var total_visu = 78.34944
var total_clique = 8.05824
var total_compart = 1.208736
var max_visu = (Investimento * total_visu)
var max_clique = (Investimento * total_clique)
var max_compartilha = (Investimento * total_compart)



window.alert (`Seu investimento foi de RS ${Investimento} </br>
O número máximo de Visualizações do seu anúncio será de ${max_visu} </br>
O número máximo de Cliques do seu anúncio será de ${max_clique} </br>
O número máximo de compartilhamentos do seu Anúncio será de ${max_compartilha}`)
