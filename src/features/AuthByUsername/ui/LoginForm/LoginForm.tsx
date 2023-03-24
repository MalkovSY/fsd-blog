import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { AppDispatch } from 'app/providers/StoreProvider';
import { getError } from 'features/AuthByUsername/model/selectors/getError/getError';
import { getUserAuthData } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoading } from '../../model/selectors/getLoading/getLoading';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';

import cls from './LoginForm.modules.scss';

interface LoginFormProps {
  onClose?: () => void;
  className?: string;
}

const LoginFormProto = ({ onClose, className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const user = useSelector(getUserAuthData);

  useEffect(() => {
    if (user) {
      onClose();
    }
  }, [onClose, user]);

  const changeUsernameHandler = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const changePasswordHandler = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const submitHandler = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  const classes = classNames(cls.LoginForm, {}, [className]);

  return (
    <div className={classes}>
      <Text className={cls.title} title={t('Авторизация')} />
      {error ? <Text text={error} theme={TextTheme.ERROR} /> : null}
      <Input
        value={username}
        onChange={changeUsernameHandler}
        placeholder={t('Логин')}
        autoFocus
        className={cls.input}
      />
      <Input
        value={password}
        onChange={changePasswordHandler}
        placeholder={t('Пароль')}
        className={cls.input}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
        onClick={submitHandler}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};

export const LoginForm = memo(LoginFormProto);
