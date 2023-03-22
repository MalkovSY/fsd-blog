import { StateSchema } from 'app/providers/StoreProvider';

export const getError = (store: StateSchema) => store.loginForm.error;
