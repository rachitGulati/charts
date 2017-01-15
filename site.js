//Register Factorial to Math object

Math.factorial = function(x){
  var result = 1;
  for(var i = 1; i < x; i++) {
    result = i * result;
  }
  return result;
}
window.onload = function(){
  //Chat for Asymptotic Analysis
  
  var ctx = document.getElementById("asymptoticAnalysis");
  var data = {
    labels: [1, 2, 3, 4, 5],
      datasets: [
      {
          label: "0(1)",
          function: function(x) { return 1 },
          borderColor: "rgba(255,99,132,1)",
          data: [],
          fill: false
      },
      {
          label: "0(logn)",
          function: function(x) { return Math.log(x) },
          borderColor: "rgba(54, 162, 235, 1)",
          data: [],
          fill: false
      },
      {
          label: "0(n)",
          function: function(x) { return x },
          borderColor: "rgba(255, 206, 86, 1)",
          data: [],
          fill: false
      },
      {
          label: "0(nlogn)",
          function: function(x) { return x*Math.log(x) },
          borderColor: "rgba(75, 192, 192, 1)",
          data: [],
          fill: false
      },
      {
          label: "O(n^2)",
          function: function(x) { return x*x },
          borderColor: "rgba(153, 102, 255, 1)",
          data: [],
          fill: false
      },
      {
          label: "2^n",
          function: function(x) { return Math.pow(2, x) },
          borderColor: "rgba(255, 206, 86, 1)",
          data: [],
          fill: false
      },
      {
          label: "n!",
          function: function(x) { return Math.factorial(x) },
          borderColor: "rgba(255, 159, 64, 1)",
          data: [],
          fill: false
      }]
  };

  Chart.pluginService.register({
      beforeInit: function(chart) {
          var data = chart.config.data;
          for (var i = 0; i < data.datasets.length; i++) {
              for (var j = 0; j < data.labels.length; j++) {
                var fct = data.datasets[i].function,
                    x = data.labels[j],
                    y = fct(x);
                  data.datasets[i].data.push(y);
              }
          }
      }
  });

  var asymptoticAnalysis = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

}
