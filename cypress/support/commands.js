import "cypress-file-upload";

Cypress.Commands.add("accessWithCredentials", (user, password) => {
  cy.visit("login");
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    user
  );
  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    password
  );
  cy.get(".oxd-button").click();
});

// Cypress.Commands.add("attach", (fileRoute) => {
//   cy.fixture(fileRoute).then((exampleFile) => {
//     const fileName = fileRoute.split("/").pop();
//     const testFile = new File([exampleFile], fileName, {
//       type: "text/plain",
//     });
//     cy.get('input[type="file"]').then((input) => {
//       const dataTransfer = new DataTransfer();
//       dataTransfer.items.add(testFile);
//       input[0].files = dataTransfer.files;
//       cy.wrap(input).trigger("change", { force: true });
//       cy.wrap(input).then((input) => {
//         expect(input[0].files[0].name).to.equal(fileName);
//       });
//     });
//   });
// });

Cypress.Commands.add("attach", (fileRoute) => {
  cy.fixture(fileRoute, "base64").then((fileContent) => {
    const fileName = fileRoute.split("/").pop();
    const blob = Cypress.Blob.base64StringToBlob(fileContent, "text/plain");
    const testFile = new File([blob], fileName, { type: "text/plain" });

    cy.get('input.oxd-file-input[type="file"]').then((input) => {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(testFile);
      input[0].files = dataTransfer.files;
      input[0].dispatchEvent(new Event("change", { bubbles: true }));
    });
  });
});
