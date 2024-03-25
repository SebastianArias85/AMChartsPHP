am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_dark)
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add data

    let url = 'http://localhost/DELETE/AMChartsPHP/apirest_php/articulos.php'; // Dar la ruta completa
    fetch(url)
        .then(response => response.json())
        .then(datos => mostrar(datos))
        .catch(e => console.log(e))

    const mostrar = (articulos) => {
        articulos.forEach(element => {
            chart.data.push(element.descripcion)
        });
        chart.data = articulos
        console.log(chart.data)

    }

    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "cantidad";
    pieSeries.dataFields.category = "descripcion";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);


}); // end am4core.ready()


