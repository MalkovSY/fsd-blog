import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.modules.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onToggleAuthModal = useCallback(() => setIsAuthModalOpen((prev) => !prev), []);

  const classes = classNames(cls.Navbar, {}, [className]);

  return (
    <div className={classes}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onToggleAuthModal}
        >
          {t('Авторизация')}
        </Button>
        <Modal
          isOpen={isAuthModalOpen}
          onClose={onToggleAuthModal}
        />
      </div>
    </div>
  );
};
