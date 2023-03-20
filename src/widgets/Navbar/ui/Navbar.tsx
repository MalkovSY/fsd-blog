import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';

import cls from './Navbar.modules.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  const onOpenAuthModal = useCallback(() => setIsAuthModalOpen(true), []);

  const classes = classNames(cls.Navbar, {}, [className]);

  return (
    <div className={classes}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onOpenAuthModal}
        >
          {t('Авторизация')}
        </Button>
        <LoginModal
          isOpen={isAuthModalOpen}
          onClose={onCloseAuthModal}
        />
      </div>
    </div>
  );
};
