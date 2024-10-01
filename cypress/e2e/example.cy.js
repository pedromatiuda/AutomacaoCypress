import examplePage from "../page/examplePage";

describe('Teste Funcionalidade example', () => {
    
    it('O elemento deve ser adicionado com sucesso', () => {
       cy.accessWithCredentials("Admin", "admin123");
    });
});