const express = require('express');

const pacienteModel = require('../model/pacienteModel');

const upload = require('../helpers/upload/hepers')

const router = express.Router();

router.post('/paciente/cadastro', upload.array('foto', 2), (req,res)=>{

    let { nome_paciente, telefone_paciente, celular_paciente, email_paciente, nome_responsevel, telefone_responsavel} = req.body;
    let foto = req.files[0].path;

    pacienteModel.create(
        {
            nome_paciente,
            telefone_paciente, 
            celular_paciente, 
            email_paciente,
            foto,
            nome_responsevel, 
            telefone_responsavel
        }
    ).then(
        () =>{
            return res.status(201).json({
                errorStatus: false,
                mesageStatus: 'paciente cadastrado'
            });
        }
    )
        .catch(
            (erro) => {
                return res.sendStatus(500).json({
                    errorStatus: true,
                    mesageStatus: erro
                });
            }
        );

});

module.exports = router;