/*
function getSingleImage(type, category, targetElementId) {
    fetch(`https://api.waifu.pics/${type}/${category}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            const targetElement = document.getElementById(targetElementId);
            if (targetElement) {
                targetElement.innerHTML = `<img src="${imageUrl}" alt="some picture" title="some picture">`;
            } else {
                console.error(`Элемент с ID "${targetElementId}" не найден.`);
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}


*/

async function getSingleImage(type, category, targetElementId) {
    try {
        const response = await fetch(`https://api.waifu.pics/${type}/${category}`);
        if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
        }
        const data = await response.json();
        const imageUrl = data.url;
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = `<img src="${imageUrl}" alt="some picture" title="some picture">`;
        } else {
            throw new Error(`Элемент с ID "${targetElementId}" не найден.`);
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

getSingleImage('sfw', 'neko', 'img_1');
getSingleImage('sfw', 'neko', 'img_2');
getSingleImage('sfw', 'neko', 'img_3');
getSingleImage('sfw', 'neko', 'img_4');
getSingleImage('sfw', 'neko', 'img_5');
getSingleImage('sfw', 'neko', 'img_6');