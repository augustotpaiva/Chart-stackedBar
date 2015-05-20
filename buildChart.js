function buildChart(data, element, dimensionX, dimensionY, labels, legends, colors){
	
	var larguraStats	= 40;
	var marginRightStats= 30;
	var larguraTtStats	= marginRightStats + larguraStats;
	var alturaTotalCol	= dimensionY;
	var altura100Col	= 217;
	var larguraUtilCols = parseInt(dimensionX) - larguraTtStats;
	var larguraUtilLabel= parseInt(dimensionX) - larguraStats;
	var larguraLegends	= 110;
	var marginLfLegends	= 10;
	
	var larguraLabelCols= larguraUtilCols + larguraTtStats;
	var larguraPctTtCol	= 100 / data.data.length;
	var larguraLiLabels	= (larguraPctTtCol * larguraUtilCols) / 100;
	var larguraPctCol	= '95%';
	var marginRgtPctCols= '5%';
	var structHTML		= '';
	var	colHTML			= '';
	var statsHTML		= '';
	var columnsHTMLinit	= '';
	var labelsHTML		= '';
	var labelslegendHTML= '<li style="width:'+marginRightStats+'px;"></li>';
	var legendSectsHTML	= '';
	var totalDadosHTML	= '';
	
	var bgsizeX			= dimensionX - larguraStats;
	if(colors == null){
		colors			= ['#3367cd', '#dc3812', '#fe9900', '#109619', '#990098', '#01b574', '#1ce3ea', '#00e13d', '#aa2100', '#6229ea', '#0084ff', '#f9d505'];
	}
	var setCountColor	= 0;
	
	var elementGet = document.getElementById(element);//get element provided
	elementGet.style.width = (parseInt(dimensionX) + larguraLegends + marginLfLegends)+'px';
	elementGet.className = 'conteudoTotalChart';
	
	if(!legends){
		dimensionX		= parseInt(dimensionX)+larguraLegends+marginLfLegends;
		larguraUtilLabel= dimensionX - larguraStats;
		larguraUtilCols = dimensionX - larguraTtStats;
		bgsizeX			= dimensionX - larguraStats;
		larguraLiLabels	= (larguraPctTtCol * (dimensionX - larguraTtStats)) / 100;
	}
	structHTML	+= '<div class="abraca_chart" style="width:'+dimensionX+'px;">';
	structHTML	+= '<div class="chartBar" style="width:'+dimensionX+'px; height:'+dimensionY+'px; background-size:'+bgsizeX+'px 22px;">';
	
	statsHTML	+= '<div class="stats">';
	statsHTML	+= '<ul>';
	statsHTML	+= '<li>100 &lt;</li>';
	statsHTML	+= '<li>90 &lt;</li>';
	statsHTML	+= '<li>80 &lt;</li>';
	statsHTML	+= '<li>70 &lt;</li>';
	statsHTML	+= '<li>60 &lt;</li>';
	statsHTML	+= '<li>50 &lt;</li>';
	statsHTML	+= '<li>40 &lt;</li>';
	statsHTML	+= '<li>30 &lt;</li>';
	statsHTML	+= '<li>20 &lt;</li>';
	statsHTML	+= '<li>10 &lt;</li>';
	statsHTML	+= '</ul>';
	statsHTML	+= '</div>';
	
	structHTML	+= statsHTML;
	
	columnsHTMLinit	= '<div class="columns" style="width:'+larguraUtilCols+'px;">';
	structHTML		+= columnsHTMLinit;
	
	for(var i = 0; i < data.data.length; i++){
		setCountColor = 0;//reset colors
		
		labelslegendHTML += '<li style="width:'+larguraLiLabels+'px;">'+data.data[i].label+'</li>';
		
		colHTML+= '<div class="col" ref="Col'+i+'" style="width:'+larguraPctTtCol+'%;">';
		colHTML+= '<div class="col_content" style="height:'+altura100Col+'px; width:'+larguraPctCol+'; margin-right:'+marginRgtPctCols+'; transform:translate(0,11px);">';
		
		var totalDados = 0;
		for(var ii = 0; ii < data.data[i].valor.length; ii++){
			totalDados += data.data[i].valor[ii];
		}
		
		totalDadosHTML += '<li><div class="bullet"></div>'+data.data[i].label+': '+totalDados+'.</li>';
		
		var colsStacksHTML = '';
		for(var ii = 0; ii < data.data[i].valor.length; ii++){
			var stack = '';
			var alturaCol	= (altura100Col * data.data[i].valor[ii])/totalDados;
			
			var pctValor	= (data.data[i].valor[ii] * 100) / totalDados;
			
			stack+= '<div class="col_content" style="height:'+alturaCol+'px; width:'+larguraPctCol+'; background:'+colors[setCountColor]+';" ref="'+data.data[i].valor[ii]+'">';
			if(labels){
				stack+= '<div class="percent">'+pctValor.toFixed(2)+'%</div>';
			}
			stack+= '</div>';
			
			if((setCountColor+1) >= colors.length){
				setCountColor = 0;
			}
			else{
				setCountColor++;
			}
			
			colsStacksHTML = stack + colsStacksHTML;
			
		}
		
		colHTML += colsStacksHTML;
		
		colHTML += '</div>';
		colHTML += '</div>';
	}
	
	structHTML	+= colHTML;
	structHTML	+= '</div>';//close columnsHTMLinit
	structHTML	+= '</div>';//close chartBar
	
	labelsHTML += '<div class="labelcolsContent" style="width:'+dimensionX+'px;height:22px;">';
	labelsHTML += '<div class="labelsContent" style="width:'+larguraUtilLabel+'px; margin-left:'+larguraStats+'px;">';
	labelsHTML += '<ul>';
	labelsHTML += labelslegendHTML;
	labelsHTML += '</ul>';
	labelsHTML += '</div>';
	labelsHTML += '</div>';
	
	structHTML += labelsHTML;
	
	structHTML += '</div>';//close abraca_chart
	
	if(legends){
	
		legendSectsHTML += '<div class="legend_sections" style="width:'+larguraLegends+'px;">';
		legendSectsHTML += '<ul class="totais">';
		legendSectsHTML += totalDadosHTML;
		legendSectsHTML += '</ul>';
		legendSectsHTML += '<ul>';
		setCountColor = 0;//reset colors
		for(var iii = 0; iii < data.series.length; iii++){
			legendSectsHTML += '<li><div class="bulletColor" style="background:'+colors[setCountColor]+';"></div>'+data.series[iii]+'</li>';
			
			if((setCountColor+1) >= colors.length){
				setCountColor = 0;
			}
			else{
				setCountColor++;
			}
		}
		legendSectsHTML += '</ul>';
		legendSectsHTML += '</div>';//close legend_sections
	}
	structHTML += legendSectsHTML;
	
	document.getElementById(element).innerHTML = structHTML;
}