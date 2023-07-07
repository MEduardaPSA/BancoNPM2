const Correntista = require('../models/accountHolder');

function salvarContaCorrente(req, res) {
    contaCorrente = {
        banco: req.body.banco,
        agencia: req.body.agencia,
        digitoAgencia: req.body.digitoAgencia,
        contaDigito: req.body.contaDigito,
        titularConta: req.body.titularConta
    }
    res.render('/', {salvarContaCorrente})
}

async function autenticarContaCorrente(req, res) {
    const correntista = await Correntista.findOne({ where: { agencia: req.body.agencia, digitoAgencia: req.body.digitoAgencia, contaDigito: req.body.contaDigito} });
    if (Correntista !== null) {
        req.session.autorizado = true;
        req.session.correntista = correntista;
        console.log('conta cadastrada com sucesso')
        res.redirect('/')
    } else {
        let erro_autenticacao = true
        res.render('index.html', {erro_autenticacao})
    }
}

module.exports =  {
    salvarContaCorrente,
    autenticarContaCorrente

};