const database = require('../database/connection');

    class UsuarioController{
        async newUser(request, response){
            const {nome, email, senha} = request.body

            try{
                console.log(nome, email, senha)

                const data = await database.insert({nome, email, senha}).table("usuario");
                console.log(data)
                response.json({message:"Usuário criado com sucesso!"});
            }catch (error){
                console.log(error);
                response.status(500).json({error: "Erro ao criar usuário"});
        }
    }
}

module.exports = new UsuarioController()