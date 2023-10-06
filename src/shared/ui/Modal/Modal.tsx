import {
  MouseEvent, ReactNode, memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.modules.scss';

interface ModalProps {
    children?: ReactNode;
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_CLOSE_DELAY_MS = 300;

export const Modal = ({
  children, className = '', isOpen, onClose, lazy,
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }

    // Для автофокуса убираем из ДОМ модалку после закрытия, убрать, если будет нужна модалка в ДОМ после открытия всегда
    return () => setIsMounted(false);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_CLOSE_DELAY_MS);
    }
  }, [onClose]);

  const escapeClick = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && onClose) {
      handleClose();
    }
  }, [handleClose, onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', escapeClick);
    }

    return () => {
      clearTimeout(timeRef.current as ReturnType<typeof setTimeout>);
      window.removeEventListener('keydown', escapeClick);
    };
  }, [isOpen, escapeClick]);

  const handleContentClick = useCallback((e: MouseEvent) => e.stopPropagation(), []);

  const classes = classNames(cls.Modal, {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }, [className]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classes}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
