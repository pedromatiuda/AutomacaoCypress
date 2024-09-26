class produtosPage {
    acessarHome(){
        return cy.get('.logo-in-theme > .logo > a > .logo-img').click();
    }
}

export default new produtosPage();