import { Button } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const handleClickIncrement = useCallback(() => dispatch(counterActions.increment()), [dispatch]);

  const handleClickDecrement = useCallback(() => dispatch(counterActions.decrement()), [dispatch]);

  return (
    <div>
      <h1 data-testid="counterValueTitle">
        {t('Значение')}
        {counterValue}
      </h1>
      <Button
        data-testid="counterIncBtn"
        onClick={handleClickIncrement}
      >
        {t('Плюс')}
      </Button>
      <Button
        data-testid="counterDecBtn"
        onClick={handleClickDecrement}
      >
        {t('Минус')}
      </Button>
    </div>
  );
};
