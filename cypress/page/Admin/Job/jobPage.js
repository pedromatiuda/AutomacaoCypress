class jobPage {
  spanJob() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(2) > span"
    );
  }

  botaoJobTitles() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a"
    );
  }
}

export default new jobPage();
