import { StateSchema } from 'app/providers/StoreProvider';

export const getPassword = (store: StateSchema) => store.login.password;
