const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routes');

require('dotenv').config({path: 'variables.env'});

const app = express();

//Habilitar hadlebars como views
app.engine('handlebars',
    exphbs.engine({
        layoutsDir: './views/layouts/',
        defaultLayout: 'layout',
        extname: 'handlebars',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault:true,
        }
    })
);

app.set('view engine', 'handlebars');

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router());

app.listen(process.env.PUERTO);