const express = require('express');

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*HABILITA A APLICAÇÃO A MANIPULAR JSON*/
app.use(express.json());

/*HABILITA A APLICAÇÃO A MANIPULAR DADOS DE UM CORPO DE DADOS*/
app.use(express.urlencoded({extended:true}));

const controllerPaciente = require('./controler/controllerPaciente');
app.use('/', controllerPaciente);

app.listen(3000, ()=>{ 
    console.log('está em processo de revolução translatorio'); 
});