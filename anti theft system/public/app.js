document.querySelector('.mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Fetch and display data in real-time
  function loadData() {
    // Firebase database fetch code here
    // Update the DOM elements with data
  }
  
  // Call the loadData function regularly to refresh the data
  setInterval(loadData, 5000);
  
  // Initialize Chart.js for graphical representation
  const ctx = document.getElementById('alert-chart').getContext('2d');
  const alertChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [], // Dates or times
      datasets: [{
        label: 'Alerts',
        data: [], // Alert count
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: '#007bff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day'
          }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Fetch data for Chart.js and update
  function updateChart() {
    // Firebase database fetch code here for alerts data
    // alertChart.data.labels.push(newLabel);
    // alertChart.data.datasets[0].data.push(newData);
    alertChart.update();
  }
  
  setInterval(updateChart, 60000); // Update chart every minute
  