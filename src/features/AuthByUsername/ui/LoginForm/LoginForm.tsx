import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoading } from '../../model/selectors/getLoading/getLoading';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';

import cls from './LoginForm.modules.scss';

interface LoginFormProps {
    className?: string;
}

const LoginFormProto = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getLoading);

  const changeUsernameHandler = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const changePasswordHandler = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const submitHandler = useCallback(() => {
    dispatch(loginActions.authSubmit());
  }, [dispatch]);

  const classes = classNames(cls.LoginForm, {}, [className]);

  return (
    <div className={classes}>
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
