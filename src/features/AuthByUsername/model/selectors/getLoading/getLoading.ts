import { StateSchema } from 'app/providers/StoreProvider';

export const getLoading = (store: StateSchema) => store.loginForm?.isLoading;
