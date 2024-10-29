import addJobTitlesPage from "../../../page/Admin/Job/JobTitles/addJobTitlesPage";
import jobTitlesPage from "../../../page/Admin/Job/JobTitles/jobTitlesPage";
import jobPage from "../../../page/Admin/Job/jobPage";
import orangePage from "../../../page/orangePage";

describe("Job Titles Funcionality Tests", () => {
  beforeEach(() => {
    cy.accessWithCredentials("Admin", "admin123");
    orangePage.botaoAdmin().click();
    cy.wait(1000);
    jobPage.spanJob().click();
    jobPage.botaoJobTitles().click();
  });

  it("Page Job Titles Loaded Successfully", () => {
    jobTitlesPage.titulo().should("have.text", "Job Titles");
    jobTitlesPage.botaoAdd().should("exist");
    jobTitlesPage.recordsFound().should("exist");
    jobTitlesPage.topCheckBox().should("exist");
    jobTitlesPage.topJobTitles().should("exist");
    jobTitlesPage.topJobDescription().should("have.text", "Job Description");
    jobTitlesPage.topActions().should("have.text", "Actions");
    jobTitlesPage.jobCheckBox().should("exist");
    jobTitlesPage.jobTitle().should("exist");
    jobTitlesPage.jobDescription().should("exist");
    jobTitlesPage.actionDelete().should("exist");
    jobTitlesPage.actionEdit().should("exist");
  });

  it("Page Add Job Title Loaded Successfully", () => {
    jobTitlesPage.botaoAdd().click();
    addJobTitlesPage.titulo().should("have.text", "Add Job Title");
    addJobTitlesPage.tituloCampoJobTitle().should("have.text", "Job Title");
    addJobTitlesPage.campoJobTitle().should("exist");
    addJobTitlesPage
      .tituloJobDescription()
      .should("have.text", "Job Description");
    addJobTitlesPage.campoJobDescription().should("exist");
    addJobTitlesPage
      .tituloCampoJobSpecification()
      .should("have.text", "Job Specification");
    addJobTitlesPage.botaoBrowse().should("exist");
    addJobTitlesPage.botaoAddFile().should("exist");
    addJobTitlesPage.botaoUploadFile().should("exist");
    addJobTitlesPage.descricaoJobSpecification().should("exist");
    addJobTitlesPage.tituloCampoNote().should("have.text", "Note");
    addJobTitlesPage.campoNote().should("exist");
    addJobTitlesPage.txtSubtitle().should("have.text", " * Required");
    addJobTitlesPage.botaoCancel().should("exist");
    addJobTitlesPage.botaoSave().should("exist");
  });

  it("Cancel Button at Add Job Title Page working correctly", () => {
    jobTitlesPage.botaoAdd().click();
    addJobTitlesPage.botaoCancel().click();
    jobTitlesPage.titulo().should("have.text", "Job Titles");
  });

  it("Job Title without Job Specification is Added Successfully", () => {
    jobTitlesPage.botaoAdd().click();
    addJobTitlesPage.campoJobTitle().type("Add Job Test");
    addJobTitlesPage
      .campoJobDescription()
      .type("Description for add job title");
    addJobTitlesPage.botaoSave().click();
    jobTitlesPage.addedSuccessfully().should("have.text", "Successfully Saved");
    cy.contains("Add Job Test").should("exist");
  });

  it("Job Title with Job Specification is Added Successfully", () => {
    jobTitlesPage.botaoAdd().click();
    addJobTitlesPage
      .campoJobTitle()
      .type("Add Job with Job Specification Test");
    addJobTitlesPage
      .campoJobDescription()
      .type("Description for add job title");
    cy.get(".oxd-file-button").click();
    cy.get('input.oxd-file-input[type="file"]').attachFile("teste.txt");
    cy.contains("teste.txt").should("exist");
    addJobTitlesPage.botaoSave().click();
    jobTitlesPage.addedSuccessfully().should("have.text", "Successfully Saved");
    cy.contains("Add Job with Job Specification Test").should("exist");
  });

  it("Job Title Edited Successfully", () => {
    jobTitlesPage.secondJobTitleEditButton().click();
    addJobTitlesPage.campoJobTitle().type("Edit Job Test");
    addJobTitlesPage.campoJobDescription().clear();
    addJobTitlesPage
      .campoJobDescription()
      .type("Description for edit job title");
    addJobTitlesPage.botaoSave().click();
    jobTitlesPage
      .addedSuccessfully()
      .should("have.text", "Successfully Updated");
    cy.contains("Edit Job Test").should("exist");
    cy.contains("Description for edit job title").should("exist");
  });

  it("Job Title Delete Confirm PopUp Loaded Successfully", () => {
    jobTitlesPage.secondJobTitleDeleteButton().click();
    jobTitlesPage.confirmDeleteTitle().should("have.text", "Are you Sure?");
    jobTitlesPage
      .confirmDeleteDescription()
      .should(
        "have.text",
        "The selected record will be permanently deleted. Are you sure you want to continue?"
      );
    jobTitlesPage.confirmDeleteXButton().should("exist");
    jobTitlesPage.confirmDeleteCancelButton().should("exist");
    jobTitlesPage.confirmDeleteButton().should("exist");
  });

  it("Job Title Delete Confirm PopUp X button working correctly", () => {
    jobTitlesPage.secondJobTitleDeleteButton().click();
    jobTitlesPage.confirmDeleteXButton().click();
    jobTitlesPage.confirmDeleteTitle().should("not.exist");
  });

  it("Job Title Delete Confirm PopUp No, Cancel button working correctly", () => {
    jobTitlesPage.secondJobTitleDeleteButton().click();
    jobTitlesPage.confirmDeleteCancelButton().click();
    jobTitlesPage.confirmDeleteTitle().should("not.exist");
  });

  it("Job Title Deleted Successfully", () => {
    jobTitlesPage.secondJobTitleDescription().then(($description) => {
      if (
        $description.text().trim() === "have.text" &&
        "Description for edit job title"
      ) {
        jobTitlesPage.secondJobTitleDeleteButton().click();
        jobTitlesPage.confirmDeleteButton().click();
        jobTitlesPage
          .addedSuccessfully()
          .should("have.text", "Successfully Deleted");
        cy.contains("Description for edit job title").should("not.exist");
      } else {
        console.log("Job não encontrado");
      }
    });
  });
});
