import { Button } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector((state: StateSchema) => state.counter.value);

  const handleClickIncrement = useCallback(() => dispatch(counterActions.increment()), [dispatch]);

  const handleClickDecrement = useCallback(() => dispatch(counterActions.decrement()), [dispatch]);

  return (
    <div>
      <h1>
        {t('Значение')}
        {counterValue}
      </h1>
      <Button
        onClick={handleClickIncrement}
      >
        {t('Плюс')}
      </Button>
      <Button
        onClick={handleClickDecrement}
      >
        {t('Минус')}
      </Button>
    </div>
  );
};
