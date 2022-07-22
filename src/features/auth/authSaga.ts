import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000)
  localStorage.setItem('access_token', 'fake_token')
  yield put(authActions.loginSuccess({
    id: 1,
    name: 'Leesin'
  }))
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message))
  }
}
function* handleLogout() {
  yield delay(500)
  localStorage.removeItem('access_token')
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      // đứng đợi đến khi user dispatch 1 action tên 'login'
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
// Ban đầu vào thì nó sẽ watchLoginFlow,
// chạy vô gặp take nó sẽ đứng đợi,  khi gặp action login thì nó sẽ handleLogin
// sau khi xử lý xong handleLogin, thì tiếp tới nó sẽ take đợi logout
// H mà ta có dispatch login thêm lần nữa thì cũng ko có thằng nào đợi
// H ta dispatch logout thì nó sẽ nhảy vô handleLogout
// H để sau khi logout xong nó sẽ lại lắng nghe login -> s/d vòng lặp
