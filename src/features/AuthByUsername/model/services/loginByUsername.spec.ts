import axios from 'axios';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

describe('loginByUsername service', () => {
  it('fulfilled and return authData', async () => {
    const authData: User = {
      id: 1,
      username: 'test',
      password: '',
    };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: authData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callAction({
      username: 'name',
      password: 'pass',
    });

    expect(mockedAxios.post)
      .toBeCalled();

    expect(thunk.dispatch)
      .toBeCalledWith(userActions.setAuthData(authData));

    expect(thunk.dispatch)
      .toBeCalledTimes(3);

    expect(result.meta.requestStatus)
      .toBe('fulfilled');

    expect(result.payload)
      .toEqual(authData);
  });

  it('rejected and return error', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callAction({
      username: 'name',
      password: 'pass',
    });

    expect(mockedAxios.post)
      .toBeCalled();

    expect(thunk.dispatch)
      .toBeCalledTimes(2);

    expect(result.meta.requestStatus)
      .toBe('rejected');

    expect(result.payload)
      .toEqual('AUTH ERROR');
  });
});
