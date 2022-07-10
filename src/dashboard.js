
    
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: '#C8DDF8',
        borderColor: '#C8DDF8',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
  
    const config = {
      type: 'line',
      data: data,
      options: {}
    };


const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

    const labels1 = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
  
    const data1 = {
      labels: labels1,
      datasets: [{
        label: 'My Second dataset',
        backgroundColor: '#7BFFB4',
        borderColor: '#7BFFB4',
        data: [0, 10, 5, 2, 20, 50, 45],
      }]
    };
  
    const config1 = {
      type: 'line',
      data: data1,
      options: {}
    };


const myChart1 = new Chart(
  document.getElementById('myChart1'),
  config1
);

    const labels2 = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
  
    const data2 = {
      labels: labels2,
      datasets: [{
        label: 'My Third dataset',
        backgroundColor: '#022859',
        borderColor: '#022859',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
  
    const config2 = {
      type: 'line',
      data: data2,
      options: {}
    };


const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config2
);
    
    
        // When the user clicks on div, open the popup
        function myFunction() {
          var popup = document.getElementById("myPopup");
          popup.classList.toggle("show");
        }
    