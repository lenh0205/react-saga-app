import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects"
import { fetchCount } from './counterAPI';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//     console.log('Log', action)
// }

function* test() {
    yield fetchCount // gọi trực tiếp ->  trả về 1 Promise
    //and
    yield call(fetchCount, 2) // dùng call() // Báo cho Saga Middleware biết để thực thi fetchCount và truyền tham số 2 -> Trả về 1 Effect
}

function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('Waiting')
    // Wait 2s
    yield delay(2000) // Effect creator của Saga để delay
    
    console.log('Waiting done, dispatch action')
    
    // Dispatch action success
    yield put(incrementSagaSuccess(action.payload))
}


export default function* counterSaga() {
    console.log('counter saga')

    yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga)
}

