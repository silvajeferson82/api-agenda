
import Contato from '../models/Contatos';

class ContatosController {
  async store(req, res){
    const { 
      nome, 
      sobrenome, 
      cpf, 
      nascimento, 
      peso 
    } = req.body;
    
    try{
    const contato = await Contato.create({
      nome,
      sobrenome,
      cpf,
      nascimento,
      peso
    });

    
      if(!contato){
        return res.status(400).json({message: "Erro ao criar contato."});
      }
      return contato;
    }catch(err){
      return res.status(500).json({message: "ERR0 2",err})
    }
      
  }
}

export default new ContatosController();