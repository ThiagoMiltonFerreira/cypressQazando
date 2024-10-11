// funcionalidade
describe("Login", () => {
  //Cenarios
  // it.only executa somente o caso de teste atual
  it("Login de sucesso", () => {
    // Executar na visualização do iphone xr
    cy.viewport("iphone-xr");
    //Acessar tela de login
    cy.visit("https://automationpratice.com.br/login");
    //digita email
    cy.get("#user").type("edu@qazando.com");
    //digita senha
    cy.get("#password").type("123456");
    //clicar no botão de login
    cy.get("#btnLogin").click();
    //validar que o login foi realizado
    // o id tenha o texto Login realizado
    cy.get("#swal2-title").should("have.text", "Login realizado");
  });
  it("Login com email vazio", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#password").type("123456");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("have.text", "E-mail inválido.");
  });
  it("Login com senha vazia", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#user").type("edu@qazando.com");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("have.text", "Senha inválida.");
  });
});

//cenarios
