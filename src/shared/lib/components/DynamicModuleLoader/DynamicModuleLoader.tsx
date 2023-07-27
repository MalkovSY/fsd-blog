import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { AppDispatch, ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [reducerKey in StateSchemaKeys]?: Reducer
}

type ReducersListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children?: ReactNode;
}

export const DynamicModuleLoader = ({
  reducers,
  children,
}: DynamicModuleLoaderProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers)
      .forEach((item) => {
        const [reducerKey, reducer] = item as ReducersListEntry;
        store.reduceManager.add(reducerKey, reducer);
        dispatch({ type: `@INIT ${reducerKey} reducer` });
      });

    return () => {
      Object.entries(reducers)
        .forEach((item) => {
          const [reducerKey]: ReducersListEntry = item as ReducersListEntry;
          store.reduceManager.remove(reducerKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
