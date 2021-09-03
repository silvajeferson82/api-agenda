
import Contato from '../../models/Contatos';

class ContatosController {
  async show(req, res){
    const contato = await Contato.findAll();

    console.log({contato});
    return res.json({contato});
  }

  async store(req, res){
    const { 
      nome, 
      sobrenome, 
      cpf, 
      nascimento, 
      peso 
    } = req.body;

    console.log(req.body);

    const contatoExist = await Contato.findOne({ where: {cpf}});

    if(contatoExist){
      return res.status(400).json({ message: 'Contato já existe!'});
    }

    const contato = await Contato.create({
      nome,
      sobrenome,
      cpf,
      nascimento,
      peso
    }).catch((err)=>{ return res.status(500).json({erro: 'Erro ao conectar.'})})
    
    try{
      if(!contato){
        return res.status(400).json({message: "Erro ao criar contato."});
      }
    console.log(contato)
    return res.json({contato});
    }catch(err){
      return res.status(500).json({message: "ERR0 2",err})
    }
      
  }
}


export default new ContatosController();