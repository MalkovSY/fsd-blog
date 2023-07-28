import { StateSchema } from 'app/providers/StoreProvider';
import type { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Returned, Arg> = (arg: Arg) =>
  AsyncThunkAction<Returned, Arg, any>

export class TestAsyncThunk<Returned, Arg> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Returned, Arg>;

  constructor(action: ActionCreatorType<Returned, Arg>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.actionCreator = action;
  }

  async callAction(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    // TODO: разобраться с типами, сейчас в резалт нет пейлоад, который по факту приходит
    return result as any;
  }
}
