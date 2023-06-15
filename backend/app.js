const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = '../data/Problema01.db';

const hostname = '127.0.0.1';
const port = 8111;
const app = express();

// /* Colocar toda a parte estática no frontend */
app.use(express.static("../frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Insere um registro (é o C do CRUD - Create)
app.post('/insereMensagem', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	var db = new sqlite3.Database(DBPATH); // Abre o banco
    const dado = req.body.matrix;
	sql = "INSERT INTO MENSAGEM (MENSAGEM) VALUES (?)";
	console.log(sql);
	db.run(sql, [dado],  err => {
		if (err) {
		    throw err;
		}
		
	});
	res.write('<a href="/listar.html">VOLTAR</a>');
	db.close(); // Fecha o banco
	res.end();
});

app.listen(port, hostname, () => {
    console.log(`Page server running at http://${hostname}:${port}/`);
  });