import {
  configureStore, ReducersMapObject, Reducer, Middleware, PayloadAction,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';
import type { NavigateOptions, To } from 'react-router-dom';
import { createReducerManager } from './reducerManger';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reduceManager = createReducerManager(rootReducers);

  const store = configureStore<
    Reducer<StateSchema>,
    PayloadAction<Partial<StateSchema>>,
    Array<Middleware<StateSchema>>
  >({
    reducer: reduceManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });

  // @ts-ignore
  store.reduceManager = reduceManager;

  return store;
}

export type AppDispatch = ReturnType<any>['dispatch'];
