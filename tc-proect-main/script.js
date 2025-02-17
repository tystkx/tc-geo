const malls = [ // Создание массива объектов, каждый из которых представляет торговый центр
    { name: "Гравитация", address: "ул. Чертановская, 20", rating: 4.4, link: "mall1.html" }, // Объект с данными о первом торговом центре
    { name: "ГАРАЖ 57", address: "ул. Примерная, 2", rating: 4.7, link: "mall2.html" }, // Объект с данными о втором торговом центре
    { name: "Большевик", address: "ул. Примерная, 3", rating: 4.6, link: "mall3.html" }, // Объект с данными о третьем торговом центре
];

function displayMalls(mallList) { // Функция для отображения списка торговых центров на странице
    const mallContainer = document.getElementById('mall-list'); // Получаем элемент списка по его ID
    mallContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых элементов
    mallList.forEach(mall => { // Проходимся по каждому торговому центру в списке
        const mallLi = document.createElement('li'); // Создаем новый элемент списка для текущего торгового центра
        const mallLink = document.createElement('a'); // Создаем ссылку для названия торгового центра
        mallLink.href = mall.link; // Устанавливаем атрибут href ссылки на значение из объекта торгового центра
        mallLink.textContent = mall.name; // Устанавливаем текст ссылки на название торгового центра
        mallLi.appendChild(mallLink); // Добавляем ссылку в элемент списка
        mallLi.innerHTML += ` <!-- Добавляем адрес и рейтинг торгового центра -->
            <p>${mall.address}</p> <!-- Параграф с адресом торгового центра -->
            <p>Рейтинг: ${mall.rating}</p> <!-- Параграф с рейтингом торгового центра -->
        `;
        mallContainer.appendChild(mallLi); // Добавляем элемент списка в контейнер
    });
}

function searchMalls() { // Функция для поиска торговых центров по названию
    const query = document.getElementById('search').value.toLowerCase(); // Получаем значение из поля поиска и переводим его в нижний регистр
    const filteredMalls = malls.filter(mall => mall.name.toLowerCase().includes(query)); // Фильтруем список торговых центров по введенному запросу
    if (filteredMalls.length === 0) { // Если результатов нет
        displayMalls(malls); // Показываем все торговые центры
        return; // Выходим из функции
    }
    displayMalls(filteredMalls); // Отображаем отфильтрованный список торговых центров
}

// Обработчик события для ввода текста в поле поиска
const searchInput = document.getElementById('search'); // Получаем элемент поля поиска по его ID
searchInput.addEventListener('input', searchMalls); // Добавляем обработчик события 'input' для вызова функции поиска при вводе текста

// Отображаем все торговые центры при загрузке страницы
displayMalls(malls); // Вызываем функцию отображения всех торговых центров