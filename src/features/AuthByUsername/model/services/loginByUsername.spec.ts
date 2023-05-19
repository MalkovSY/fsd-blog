import { loginByUsername } from './loginByUsername';

describe('loginByUsername service tests', () => {
  it('throw error', () => {
    loginByUsername({ username: 'incorrectUsername', password: 'incorrectPassword' });
  });
});
