import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthData = (store: StateSchema) => store.user.authData;
