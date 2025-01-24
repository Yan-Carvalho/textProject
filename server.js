// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.post('/save', (req, res) => {
//     const filename = req.body.filename;
//     const data = req.body.data;
//     fs.writeFile(filename, data, (err) => {
//         if (err) {
//             res.status(500).send('Erro ao salvar os dados.');
//         } else {
//             res.send('Dados salvos com sucesso em ' + filename);
//         }
//     });
// });

// app.get('/load', (req, res) => {
//     const filename = req.query.filename;
//     fs.readFile(filename, 'utf8', (err, data) => {
//         if (err) {
//             // res.status(500).send('Erro ao carregar os dados.');
//         } else {
//             res.send(data);
//         }
//     });
// });

// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
// });



















const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/save', (req, res) => {
    const filename = req.body.filename;
    const data = req.body.data;
    fs.writeFile(filename, data, (err) => {
        if (err) {
            res.status(500).send('Erro ao salvar os dados.');
        } else {
            res.send('Dados salvos com sucesso em ' + filename);
        }
    });
});

app.get('/load', (req, res) => {
    const filename = req.query.filename;
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao carregar os dados.');
        } else {
            res.send(data);
        }
    });
});

app.get('/trainings', (req, res) => {
    fs.readdir('.', (err, files) => {
        if (err) {
            res.status(500).send('Erro ao listar os arquivos.');
        } else {
            const txtFiles = files.filter(file => file.endsWith('.txt'));
            res.json(txtFiles);
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
