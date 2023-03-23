import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const LoginModal = ({ isOpen, onClose, className }: LoginModalProps) => {
  const classes = classNames('', {}, [className]);

  return (
    <Modal className={classes} isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm onClose={onClose} />
    </Modal>
  );
};
