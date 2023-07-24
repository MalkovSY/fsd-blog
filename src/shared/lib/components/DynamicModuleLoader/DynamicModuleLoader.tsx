import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { AppDispatch, ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export interface ReducerType {
  reducerKey: StateSchemaKeys;
  reducer: Reducer;
}

interface DynamicModuleLoaderProps {
  reducers: Array<ReducerType>;
  children?: ReactNode;
}

export const DynamicModuleLoader = ({ reducers, children }: DynamicModuleLoaderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    reducers.forEach(({ reducerKey, reducer }) => {
      store.reduceManager.add(reducerKey, reducer);
      dispatch({ type: `@INIT ${reducerKey} reducer` });
    });

    return () => {
      reducers.forEach(({ reducerKey }) => {
        store.reduceManager.remove(reducerKey);
        dispatch({ type: `@DESTROY ${reducerKey} reducer` });
      });
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { children }
    </>
  );
};
