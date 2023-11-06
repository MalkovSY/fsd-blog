import { StateSchema } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';

export const getProfile = (state: StateSchema): Profile | undefined => state?.profile?.data;
