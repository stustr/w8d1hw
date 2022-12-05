describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("number buttons should update display running total", () => {
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get(".display").should("contain", "222");
  });

  it("arithmetical operations update display with result", () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4");
  });

  it("multiple operations chained together", () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "8");
  });

  it("range of numbers accepted", () => {
    cy.get("#number2").click();
    cy.get("#decimal").click();
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#decimal").click();
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "222202");
  });

  it("can log error if divide by zero", () => {
    cy.get("#number2").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "error - divided by 0");
  });
});
