class JobTitlesPage {
  titulo() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > h6"
    );
  }

  botaoAdd() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > div > button"
    );
  }

  recordsFound() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div:nth-child(2) > div > span"
    );
  }

  topCheckBox() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-header > div > div:nth-child(1) > div > label > span > i"
    );
  }

  topJobTitles() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-header > div > div:nth-child(2)"
    );
  }

  topJobDescription() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-header > div > div:nth-child(3)"
    );
  }

  topActions() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-header > div > div:nth-child(4)"
    );
  }

  jobCheckBox() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(1) > div > div > label > span > i"
    );
  }

  jobTitle() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(2) > div"
    );
  }

  jobDescription() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(4) > div > button:nth-child(1) > i"
    );
  }

  actionDelete() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(4) > div > button:nth-child(2) > i"
    );
  }

  actionEdit() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(1) > div > div:nth-child(4) > div > button:nth-child(2) > i"
    );
  }

  addedSuccessfully() {
    return cy.get(
      "#oxd-toaster_1 > div > div.oxd-toast-start > div.oxd-toast-content.oxd-toast-content--success > p.oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text"
    );
  }

  secondJobTitleDescription() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(2) > div > div:nth-child(3) > div > span"
    );
  }

  secondJobTitleDeleteButton() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(2) > div > div:nth-child(4) > div > button:nth-child(1) > i"
    );
  }

  secondJobTitleEditButton() {
    return cy.get(
      "#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-container > div > div.oxd-table-body > div:nth-child(2) > div > div:nth-child(4) > div > button:nth-child(2)"
    );
  }

  confirmDeleteTitle() {
    return cy.get(
      "#app > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > div.orangehrm-modal-header > p"
    );
  }

  confirmDeleteDescription() {
    return cy.get(
      "#app > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > div.orangehrm-text-center-align > p"
    );
  }

  confirmDeleteXButton() {
    return cy.get(
      "#app > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > button"
    );
  }

  confirmDeleteCancelButton() {
    return cy.get(
      "#app > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > div.orangehrm-modal-footer > button.oxd-button.oxd-button--medium.oxd-button--ghost.orangehrm-button-margin"
    );
  }

  confirmDeleteButton() {
    return cy.get(
      "#app > div.oxd-overlay.oxd-overlay--flex.oxd-overlay--flex-centered > div > div > div > div.orangehrm-modal-footer > button.oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin"
    );
  }
}

export default new JobTitlesPage();
