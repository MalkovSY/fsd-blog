import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

import cls from './LoginModal.modules.scss';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => {
  const { t } = useTranslation();

  const classes = classNames(cls.LoginModal, {}, [className]);

  return (
    <Modal className={classes} isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};
