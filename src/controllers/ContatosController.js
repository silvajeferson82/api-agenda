// import express from 'express';
// import Sequelize from 'sequelize';
import Contato from '../models/Contatos';

class ContatosController {
  async store(req, res){
    const { nome, sobrenome, cpf, nascimento, peso } = req.body;
    console.log(req.body);

    const contato = await Contato.create({
      nome,
      sobrenome,
      cpf,
      nascimento,
      peso
    });

    return res.json(contato);
  }
}

export default new ContatosController();