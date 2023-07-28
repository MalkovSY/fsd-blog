import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  it('setUsername', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'testBefore',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('testAfter' as any)))
      .toEqual({
        username: 'testAfter',
      });
  });

  it('setPassword', () => {
    const state: DeepPartial<LoginSchema> = {
      password: 'testBefore',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('testAfter' as any)))
      .toEqual({
        password: 'testAfter',
      });
  });
});
