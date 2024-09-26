import produtosPage from "../page/produtosPage";

describe('Teste Funcionalidade Produtos', () => {
    beforeEach(()=>{
        cy.visitarSite('produtos');
    }) 
    it('O elemento deve ser adicionado com sucesso', () => {
        produtosPage.acessarHome();
    });
});