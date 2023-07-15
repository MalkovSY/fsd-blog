import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { AppDispatch, ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername';
import { getError } from '../../model/selectors/getError/getError';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoading } from '../../model/selectors/getLoading/getLoading';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';

import cls from './LoginForm.modules.scss';

interface LoginFormProps {
  onClose?: () => void;
  className?: string;
}

const LoginFormProto = ({
  onClose,
  className,
}: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const user = useSelector(getUserAuthData);
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reduceManager.add('loginForm', loginReducer);
    dispatch({ type: '@INIT loginForm reducer' });

    return () => {
      store.reduceManager.remove('loginForm');
      dispatch({ type: '@DESTROY loginForm reducer' });
    };
  }, []);

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
    dispatch(loginByUsername({
      username,
      password,
    }));
  }, [dispatch, username, password]);

  const ErrorMessage = error ? <Text text={t('Вы ввели неверный логин или пароль!')} theme={TextTheme.ERROR} /> : null;

  const classes = classNames(cls.LoginForm, {}, [className]);

  return (
    <div className={classes}>
      <Text className={cls.title} title={t('Авторизация')} />
      {ErrorMessage}
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
