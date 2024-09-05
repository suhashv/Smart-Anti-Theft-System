// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Activity Chart (Using Chart.js for Demo)
const ctx = document.getElementById('activityChart').getContext('2d');
const activityChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Security Events',
            data: [2, 5, 3, 8, 6, 4, 7],
            backgroundColor: '#2575fc',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Settings Form Submission
document.getElementById('settings-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Settings saved successfully!');
});
