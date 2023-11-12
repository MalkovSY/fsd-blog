import { useSelector } from 'react-redux';
import {
  getProfileLoading, getProfileError, getProfile,
} from 'entities/Profile';
import { Input } from 'shared/ui/Input/Input';

export const ProfileCard = () => {
  const profile = useSelector(getProfile);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  const { username, firstname, lastname } = profile ?? {};

  return (
    <div>
      <Input value={username} placeholder="Ваш логин" />
      <Input value={firstname} placeholder="Ваше имя" />
      <Input value={lastname} placeholder="Ваша фамилия" />
    </div>
  );
};
