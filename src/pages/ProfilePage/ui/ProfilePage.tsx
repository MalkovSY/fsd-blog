import { fetchProfileData, getProfile, profileReducer } from 'entities/Profile';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer,
};

function ProfilePage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const profile = useSelector(getProfile);
  const profileError = useSelector(getProfileError);
  const isProfileLoading = useSelector(getProfileLoading);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);
  console.log('profile', profile);
  console.log('profileError', profileError);
  console.log('isProfileLoading', isProfileLoading);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
