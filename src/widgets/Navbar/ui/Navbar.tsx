import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';

import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.modules.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const user = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  const onOpenAuthModal = useCallback(() => setIsAuthModalOpen(true), []);

  const logoutHandler = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const LoginAuthButton = user ? (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={logoutHandler}
    >
      {t('Выйти')}
    </Button>
  ) : (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onOpenAuthModal}
    >
      {t('Авторизация')}
    </Button>
  );

  const classes = classNames(cls.Navbar, {}, [className]);

  return (
    <div className={classes}>
      <div className={cls.links}>
        {LoginAuthButton}
        <LoginModal
          isOpen={isAuthModalOpen}
          onClose={onCloseAuthModal}
        />
      </div>
    </div>
  );
};
