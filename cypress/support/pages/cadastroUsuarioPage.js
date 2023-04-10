import cadastroUsuarioElements from '../html/cadastroUsuarioElements.js';
import { cpf } from 'cpf-cnpj-validator';


class CadastroUsuarioPage {
    constructor({
        firstName,
        lastName,
        email,
        password,
        repeatPassword,
        cpf,
        dataNascimento,
        telefone,
    }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
    }
   
    visit() {
        cy.visit('/cadastre-se');

        cy.get(cadastroUsuarioElements.acceptCookiesButton).should('be.visible').within(() => {
            cy.contains('Aceitar').click();
        });
    }


    preencherFormulario(genero) {
        cy.get(cadastroUsuarioElements.formulario.firstNameInput).type(this.firstName);
        cy.get(cadastroUsuarioElements.formulario.lastNameInput).type(this.lastName);
        cy.get(cadastroUsuarioElements.formulario.emailInput).type(this.email);
        cy.get(cadastroUsuarioElements.formulario.passwordInput).type(this.password);
        cy.get(cadastroUsuarioElements.formulario.confirmPasswordInput).type(this.repeatPassword);
        cy.get(cadastroUsuarioElements.formulario.cpfInput).type(this.cpf);

        if (genero === 'male') {
            cy.get(cadastroUsuarioElements.formulario.genderMaleRadio).click();
        } else if (genero === 'female') {
            cy.get(cadastroUsuarioElements.formulario.genderFemaleRadio).click();
        }

        cy.get(cadastroUsuarioElements.formulario.dateOfBirthInput).type(this.dataNascimento);
        cy.get(cadastroUsuarioElements.formulario.homePhoneInput).type(this.telefone);
    }

    validarCamposPreenchidos() {
        cy.get(cadastroUsuarioElements.formulario.firstNameInput).should('have.value', this.firstName);
        cy.get(cadastroUsuarioElements.formulario.lastNameInput).should('not.be.null');
        cy.get(cadastroUsuarioElements.formulario.emailInput).should('not.be.null');
        cy.get(cadastroUsuarioElements.formulario.passwordInput).should('have.value', this.password);
        cy.get(cadastroUsuarioElements.formulario.confirmPasswordInput).should('have.value', this.repeatPassword);
        cy.get(cadastroUsuarioElements.formulario.cpfInput).should('have.value', cpf.format(this.cpf));
        if (this.gender === 'male') {
            cy.get(cadastroUsuarioElements.formulario.genderMaleRadio).should('be.checked');
        } else if (this.gender === 'female') {
            cy.get(cadastroUsuarioElements.formulario.genderFemaleRadio).should('be.checked');
        }
        cy.get(cadastroUsuarioElements.formulario.dateOfBirthInput).should('not.be.null');
        cy.get(cadastroUsuarioElements.formulario.homePhoneInput).should('not.be.null');
    }


    concordarComTermos() {
        cy.get(cadastroUsuarioElements.formulario.receiveNewsLetterCheckbox).click();
        cy.get(cadastroUsuarioElements.formulario.infContOptInCheckbox).click();
        cy.get(cadastroUsuarioElements.formulario.acceptedTermsCheckbox).click();
    }

    enviarFormulario() {
        cy.get(cadastroUsuarioElements.formulario.criarContaButton)
            .should('exist')
            .click();
    }

    verificarCadastroComSucesso() {
        cy.get(cadastroUsuarioElements.successMessage, { timeout: 10000 })
            .should('exist')
            .invoke('text')
            .should('contain', this.firstName);
    }

}

export default CadastroUsuarioPage;


