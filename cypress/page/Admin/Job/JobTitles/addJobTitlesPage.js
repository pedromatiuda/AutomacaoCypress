class AddJobTitlesPage {
  titulo() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > h6"
    );
  }

  tituloCampoJobTitle() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div.oxd-input-group__label-wrapper > label"
    );
  }

  campoJobTitle() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input"
    );
  }

  tituloJobDescription() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div.oxd-input-group__label-wrapper > label"
    );
  }

  campoJobDescription() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > textarea"
    );
  }

  tituloCampoJobSpecification() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div.oxd-input-group__label-wrapper > label"
    );
  }

  botaoBrowse() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-file-button"
    );
  }

  botaoAddFile() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div"
    );
  }

  botaoUploadFile() {
    return cy.get(".oxd-file-button").contains("Browse");
  }

  labelFile() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-file-input-div"
    );
  }

  descricaoJobSpecification() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > p"
    );
  }

  tituloCampoNote() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(4) > div > div.oxd-input-group__label-wrapper > label"
    );
  }

  campoNote() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(4) > div > div:nth-child(2) > textarea"
    );
  }

  txtSubtitle() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > p"
    );
  }

  botaoCancel() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--ghost"
    );
  }

  botaoSave() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space"
    );
  }

  attachFile() {
    return cy.attach("teste.txt");
  }
}

export default new AddJobTitlesPage();
