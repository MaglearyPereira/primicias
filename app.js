const express = require('express');
const app = express();
const path = require('path');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Ruta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { title: 'Mi App', message: '¡Hola, mundo!' });
});
app.get('/creceRoutes', (req, res) => {
    res.render('crece', { title: 'Mi App', message: '¡Hola, mundo!' });
});
app.get('/fundamentos', (req, res) => {
    res.render('fundamentos', { title: 'Mi App', message: '¡Hola, mundo!' });
});
app.get('/afilados', (req, res) => {
    res.render('afilados', { title: 'Mi App', message: '¡Hola, mundo!' });
});
// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});