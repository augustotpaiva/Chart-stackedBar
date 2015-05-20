<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="styleChart.css" type="text/css" />
<script type="text/javascript" src="buildChart.js"></script>
<title>Charts</title>
</head>
<body>
    <div id="chart"></div>
    <div id="chart2"></div>
</body>
<script type="text/javascript">
	var TotalData = {
		series	: ['Sacos em pé','Sacos deitados','Sacos vazios','Sacos cheios','Sacos rasgados'],
		data	: [
			{
				label	: '2012',
				valor	: [20, 10, 35, 15, 20]
			},
			{
				label	: '2013',
				valor	: [10, 40, 60, 80, 100]
			},
			{
				label	: '2014',
				valor	: [90, 70, 50, 30, 20]
			},
			{
				label	: '2015',
				valor	: [95, 75, 55, 35, 15]
			}
		]
	};
	
	buildChart(TotalData, 'chart', '350', '228', true, true);//gera o gráfico
	
	
	var TotalData2 = {
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
	
	buildChart(TotalData2, 'chart2', '350', '228', true, true, ['#ff0000', '#0000ff']);//gera o gráfico
	
	
</script>

</html>