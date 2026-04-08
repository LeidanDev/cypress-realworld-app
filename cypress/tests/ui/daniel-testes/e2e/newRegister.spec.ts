import NewRegister from "../pages/newRegisterPage";
import userData from "../fixtures/userData.json";

describe('Cadastro de usuário', () => {

    beforeEach(() => {
        NewRegister.accessPage();
    });

    it('Deve registrar usuário com sucesso', () => {
        const user = userData.newUser;

        NewRegister.registerUser(
            user.firstname,
            user.lastname,
            user.username,
            user.password
        );

        // aqui você pode validar sucesso (ex: redirecionamento ou mensagem)
    });

    it('Deve validar campos obrigatórios', () => {
        NewRegister.validateRequiredFields();
    });
});