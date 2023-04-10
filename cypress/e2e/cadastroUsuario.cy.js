import CadastroUsuarioPage from '../support/pages/cadastroUsuarioPage';
import cadastroUsuarioData from '../fixtures/cadastroUsuarioData';

describe('Cadastro de Usuário com Preenchimento de todos os Campos', () => {
    const cadastroUsuarioPage = new CadastroUsuarioPage(cadastroUsuarioData);

    it('Deve Cadastrar um novo Usuario com Sucesso', () => {
        cadastroUsuarioPage.visit();
        cadastroUsuarioPage.preencherFormulario('male'); // clica no botão de gênero masculino
        cadastroUsuarioPage.concordarComTermos();
        cadastroUsuarioPage.validarCamposPreenchidos();
        cadastroUsuarioPage.enviarFormulario();
        cadastroUsuarioPage.verificarCadastroComSucesso();

    });


})



