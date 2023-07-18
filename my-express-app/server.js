const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Налаштовуємо роздачу статичних файлів з папки build
app.use(express.static(path.join(__dirname, 'build')));

// Маршрут для відображення index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
