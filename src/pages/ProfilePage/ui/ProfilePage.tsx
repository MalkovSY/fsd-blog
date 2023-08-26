import { useTranslation } from 'react-i18next';

function ProfilePage() {
  const { t } = useTranslation();

  return (
    <div>
      {t('Профиль')}
    </div>
  );
}

export default ProfilePage;
