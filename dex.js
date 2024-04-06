function getTimeInTimeZone(timezone) {
    const now = new Date();
    const options = {
        timeZone: timezone,
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return now.toLocaleTimeString('ru-RU', options);
}
function updateClocks() {
    document.getElementById('NYC').textContent = `Нью-Йорк: ${getTimeInTimeZone('America/New_York')}`;
    document.getElementById('cal').textContent = `Калифорния: ${getTimeInTimeZone('America/Los_Angeles')}`;
    document.getElementById('tok').textContent = `Токио: ${getTimeInTimeZone('Asia/Tokyo')}`;
}

setInterval(updateClocks, 1000);
updateClocks();

document.getElementById('toggleButton_1').addEventListener('click', function() {
    document.body.classList.toggle('medieval-style');
    document.querySelectorAll('.container').forEach(function(container) {
        container.classList.toggle('medieval-style'); 
    });
    document.querySelector("header").classList.toggle('medieval-style');
    document.getElementById("toggleButton_1").classList.toggle('medieval-style');
});

document.getElementById('toggleButton_2').addEventListener('click', function() {
    document.body.classList.toggle('oriental-style');
    document.querySelectorAll('.container').forEach(function(container) {
        container.classList.toggle('oriental-style'); 
    });
    document.querySelector("header").classList.toggle('oriental-style');
    document.getElementById("toggleButton_2").classList.toggle('oriental-style');
});