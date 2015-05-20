# Chart-stackedBar
Desenvolvimento de um gráfico stackedBar em css, html e javascript.

* O gráfico ainda não está totalmente preparado para trabalhar de forma responsiva no eixo Y. Altura total é 250px.
* Não necessita do jquery para funcionar.
* É importante executar a função buildChart() ao fim da página, pois ela irá montar o gráfico somente após o elemento html já ter sido criado. Caso contrário retornará um erro.
* A biblioteca JS pode ser carregada no header livremente.
* O plugin contempla apenas gráficos no formato de barras empilhadas (stacked bar).
* Foi projetado para trabalhar com porcentagens. Sendo assim você pode fornecer qualquer valor para o gráfico. O script fará os cálculos e trabalhará sempre com a porcentagem relativa à amostragem.

###Como executar o gráfico

- Instancie um div vazio com nomenclatura de id à seu critério que receberá toda a estrutura do gráfico (lembrando que nao podemos ter id's duplicados na aplicação). Ex.: `<div id="chart"></div>`.
- O gráfico será montado executando a função buildChart() fornecendo os dados necessários como parametro. Ex.:
	
`buildChart(TotalData, elemento, dimensaoX, dimensaoY, labels, legends, colors);`
	
Onde:
	- TotalData é um objeto com os dados de amostragem para o gráfico. Ex.:
```
var TotalData = {
	series	: ['Windows','Linux'],
	data	: [
		{
			label	: '2017',
			valor	: [50, 50]
		},
		{
			label	: '2018',
			valor	: [25, 75]
		}
	]
};
```

Onde:
- series são os tipos de dados na amostragem;
- data recebe os dados, onde:
- label é a legenda de barras que será mostrada logo abaixo de cada barra;
- valor é um array com valores diretamente espectivos às series. No exemplo, sendo assim, temos:
 * 50 usuários de Windows e 50 de Linux no ano de 2017;
 * 25 usuários de Windows e 75 de Linux no ano de 2018;
- elemento é uma string contendo o id do div instanciado a receber a estrutura do gráfico;
- dimensaoX é a largura do corpo do gráfico. O tamanho total depende das demais configurações;
- dimensaoY é a altura do corpo do gráfico. A altura total é acrescida de 22px (leganda de barras) totalizando 250px;
- labels [true/false] ativa ou inabilita labels nas colunas indicando o volume total em porcentagem;
- legends [true/false] ativa ou inabilita legendas do lado direito do gráfico. Caso true, serão acrescidos 120px à largura total do gráfico;
- colors é opcional. Você pode customizar sua própria paleta de cores (formato hexadecimal) passando por array. Caso não seja fornecido, o plugin utilizará suas cores prédefinidas. Ex.:
  * ['#ff0000', '#0000ff']. Isso criará o gráfico apenas nas cores vermelho e azul.
	
		
