import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  memo,
  useCallback, useEffect, useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.modules.scss';

type InputExtendedProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends InputExtendedProps {
  value?: string;
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  autoFocus?: boolean,
  className?: string;
}

const INPUT_CARET_WIDTH = 9;

const InputProto = ({
  value = '',
  onChange,
  type = 'text',
  placeholder,
  autoFocus,
  className,
  ...otherProps
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef?.current?.focus();
    }
  }, [autoFocus]);

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  const selectHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e.target.selectionStart || 0);
  }, []);

  const focusHandler = useCallback(() => setIsFocused(true), []);

  const blurHandler = useCallback(() => setIsFocused(false), []);

  const classes = classNames(cls.Input, {}, [className]);

  return (
    <div className={classes}>
      {placeholder ? <span className={cls.placeholder}>{`${placeholder}>`}</span> : null}
      <div className={cls.InputWrapper}>
        <input
          ref={inputRef}
          value={value}
          onChange={changeHandler}
          onSelect={selectHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          type={type}
          className={cls.input}
          {...otherProps}
        />
        {isFocused ? (
          <span
            style={{ left: caretPosition * INPUT_CARET_WIDTH }}
            className={cls.caret}
          />
        ) : null}
      </div>
    </div>
  );
};

export const Input = memo(InputProto);
