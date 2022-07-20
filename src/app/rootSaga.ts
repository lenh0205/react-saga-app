import { authSaga } from 'features/auth/authSaga';
import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

// function* helloSaga() {
//   console.log('hello saga');
// }

export default function* rootSaga() {
  yield all([counterSaga(), authSaga()]);
}
