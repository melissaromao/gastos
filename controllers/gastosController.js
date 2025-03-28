const GastosModel = require('../models/gastosModel');

module.exports = {
    exibirLista(req, res) {
        const gastos = GastosModel.listar();
        res.render('listaGastos', { gastos });
    },

    exibirAdicionarGasto(req, res) {
        res.render('adicionarGasto');
    },

    adicionarGasto(req, res) {
        const novoGasto = {
            categoria: req.body.categoria,
            valor: req.body.valor,
            prioridade: req.body.prioridade
        };
        GastosModel.adicionar(novoGasto);
        res.redirect('/');
    },

    exibirEdicao(req, res) {
        const { id } = req.params;
        const gasto = GastosModel.listar().find((g) => g.id == id);
        res.render('editaGasto', { gasto });
    },

    editarGasto(req, res) {
        const { id } = req.params;
        GastosModel.editar(id, req.body);
        res.redirect('/');
    },

    excluirGasto(req, res) {
        const { id } = req.params;
        GastosModel.excluir(id);
        res.redirect('/');
    }
};