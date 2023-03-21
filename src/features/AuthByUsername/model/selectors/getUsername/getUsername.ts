import { StateSchema } from 'app/providers/StoreProvider';

export const getUsername = (store: StateSchema) => store.login.username;
