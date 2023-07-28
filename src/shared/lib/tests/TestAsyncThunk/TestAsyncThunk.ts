import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit/src/createAsyncThunk';

type ActionCreatorType<Returned, Arg, Rejected> = (arg: Arg) =>
  AsyncThunkAction<Returned, Arg, { rejectedValue: Rejected }>

export class TestAsyncThunk<Returned, Arg, Rejected> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Returned, Arg, Rejected>;

  constructor(action: ActionCreatorType<Returned, Arg, Rejected>) {
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
