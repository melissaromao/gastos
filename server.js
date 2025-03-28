const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const gastosController = require('./controllers/gastosController');

const app = express();

// Definindo o diretório de arquivos estáticos
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'layout', // Define layout padrão como "layout.handlebars" 
    layoutsDir: __dirname + '/views/' // Ajusta o diretório de layouts 
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas 
app.get('/', gastosController.exibirLista);
app.get('/gastos/adicionar', gastosController.exibirAdicionarGasto);
app.post('/gastos', gastosController.adicionarGasto);
app.get('/gastos/:id/editar', gastosController.exibirEdicao);
app.post('/gastos/:id/editar', gastosController.editarGasto);
app.get('/gastos/:id/excluir', gastosController.excluirGasto);

// Iniciar o servidor 
app.listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080");
});