import { useSelector } from 'react-redux';
import {
  getProfileLoading, getProfileError, getProfile, Profile,
} from 'entities/Profile';

export const ProfileCard = () => {
  const profile = useSelector(getProfile);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);
  console.log('profile', profile);
  console.log('profileError', error);
  console.log('isProfileLoading', isLoading);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  const { username, firstname, lastname } = profile ?? {};

  return (
    <div>
      <div>{username}</div>
      <div>{firstname}</div>
      <div>{lastname}</div>
    </div>
  );
};
