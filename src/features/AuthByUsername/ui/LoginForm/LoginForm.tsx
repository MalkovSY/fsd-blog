import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './LoginForm.modules.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { t } = useTranslation();

  const changeUsernameHandler = useCallback((value) => setUsernameValue(value), []);

  const changePasswordHandler = useCallback((value) => setPasswordValue(value), []);

  const classes = classNames(cls.LoginForm, {}, [className]);

  return (
    <div className={classes}>
      <Input
        value={usernameValue}
        onChange={changeUsernameHandler}
        placeholder={t('Логин')}
        autoFocus
        className={cls.input}
      />
      <Input
        value={passwordValue}
        onChange={changePasswordHandler}
        placeholder={t('Пароль')}
        className={cls.input}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
