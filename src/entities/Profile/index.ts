export { Profile, ProfileSchema } from './model/types/profile';

export { profileActions, profileReducer } from './model/slice/profileSlice';

export { fetchProfileData } from './model/services';

export { getProfile, getProfileError, getProfileLoading } from './model/selectors';
