// import express from 'express';
// import Sequelize from 'sequelize';
import Contatos from '../models/Contatos';

class ContatosController {
  async store(req, res){
    const {
      nome,
      sobrenome,
      cpf,
      nascimento,
      peso
    } = req.body;
    console.log(req.body);
    try{ 
      // const cpfExists = await Contatos.findOne( cpf );
      // console.log(cpfExists);
      // if(cpfExists !== null){
      //   return res.json({message: "Contato já existe"});
      // }

      const contato = await Contatos.create({
        nome,
        sobrenome,
        cpf,
        nascimento,
        peso,
      });

      return res.json(contato);
      
    }catch(err){
      return res.status(500).json({message: "Erro ao criar contato!",err});
    }

  }
}

export default new ContatosController();