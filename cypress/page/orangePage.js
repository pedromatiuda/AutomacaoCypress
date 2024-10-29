class orangePage {
  botaoAdmin() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a"
    );
  }
}

export default new orangePage();
