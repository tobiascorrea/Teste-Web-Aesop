import { faker } from '@faker-js/faker';
import gerarCpf from '../utils/gerarCpfValido';

export default {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: 'a@123B98',
  repeatPassword: 'a@123B98',
  cpf: gerarCpf(),
  dataNascimento: '01021984',
  telefone: faker.phone.phoneNumberFormat(2),
};
