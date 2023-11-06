import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/useAppDispatch';
import { ProfileCard } from './ProfileCard/ProfileCard';

const reducers: ReducersList = {
  profile: profileReducer,
};

function ProfilePage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        {t('Профиль')}
      </div>

      <ProfileCard />
    </DynamicModuleLoader>
  );
}

export default ProfilePage;
