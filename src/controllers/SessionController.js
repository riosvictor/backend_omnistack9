//index = listagem, show = apenas uma, store = criar, 
//udpate = alterar, destroy = remover, deletar

const User = require('../models/User');

module.exports = {
    async store(req, res){ //async = função assincrona
        //const email = req.body.email;
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user){
            //await = aguarde a função finalizar
            user = await User.create({ email });
        }

        return res.json(user);
    }
}