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




var medievalStyleActive = false;
var orientalStyleActive = false;
document.getElementById('toggleButton_1').addEventListener('click', function() {
    medievalStyleActive = !medievalStyleActive; // Инвертируем значение переменной
    if (orientalStyleActive) {
        removeOrientalStyle(); 
    }

    if (medievalStyleActive) {
        addMedievalStyle(); // Добавляем стиль, если переменная true
    } else {
        removeMedievalStyle(); // Удаляем стиль, если переменная false
    }
});

document.getElementById('toggleButton_2').addEventListener('click', function() {
    orientalStyleActive = !orientalStyleActive; // Инвертируем значение переменной
    if (medievalStyleActive) {
        removeMedievalStyle(); 
    }

    if (orientalStyleActive) {
        addOrientalStyle(); // Добавляем стиль, если переменная true
    } else {
        removeOrientalStyle(); // Удаляем стиль, если переменная false
    }
});

function addMedievalStyle() {
    document.body.classList.add('medieval-style'); // Добавляем класс Medieval
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        container.classList.add('medieval-style'); // Добавляем класс к каждому контейнеру
    });
    document.querySelector("header").classList.toggle('medieval-style');
}

function removeMedievalStyle() {
    document.body.classList.remove('medieval-style'); // Удаляем класс Medieval
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        container.classList.remove('medieval-style'); // Удаляем класс у каждого контейнера
    });
    document.querySelector("header").classList.toggle('medieval-style');
}

function addOrientalStyle() {
    document.body.classList.add('oriental-style'); // Добавляем класс Medieval
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        container.classList.add('oriental-style'); // Добавляем класс к каждому контейнеру
    });
    document.querySelector("header").classList.toggle('oriental-style');
}

function removeOrientalStyle() {
    document.body.classList.remove('oriental-style'); // Удаляем класс Medieval
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        container.classList.remove('oriental-style'); // Удаляем класс у каждого контейнера
    });
    document.querySelector("header").classList.toggle('oriental-style');
}