import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LoginForm.modules.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  const classes = classNames(cls.LoginForm, {}, [className]);

  return (
    <div className={classes}>
      <input
        type="text"
        className={cls.input}
      />
      <input
        type="text"
        className={cls.input}
      />
      <Button
        className={cls.submitBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
