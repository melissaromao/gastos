let gastos = [
    { id: 1, categoria: "Acadêmia", valor: 120, prioridade: 'Baixa'},
    { id: 2, categoria: "Alimentação", valor: 350, prioridade: 'Alta'},
    { id: 3, categoria: "Aluguel", valor: 700, prioridade: 'Alta'},
    { id: 4, categoria: "Transporte", valor: 200, prioridade: 'Alta'}
];

module.exports = {
    listar() {
        return gastos;
    },

    adicionar(gasto) {
        gasto.id = gastos.length + 1;
        gastos.push(gasto);
    },

    editar(id, dados) {
        const gasto = gastos.find((g) => g.id == id);
        if (gasto) {
            gasto.categoria = dados.categoria,
            gasto.valor = dados.valor,
            gasto.prioridade = dados.prioridade;
        }
    },
    excluir(id) {
        gastos = gastos.filter((g) => g.id != id);
    }
};