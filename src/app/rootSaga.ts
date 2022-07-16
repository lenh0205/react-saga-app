import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

// Mỗi Saga là 1 generator function
function* helloSaga() {
  console.log('hello saga');
}

export default function* rootSaga() {
  console.log('Root saga');
  yield all([helloSaga(), counterSaga()]);
}
// all là 1 effect -> chạy tất cả các Saga trong Mảng
// khi store đc khởi tạo nó sẽ chạy root saga -> rồi nó sẽ chạy 1 loạt các Saga con

// Nhưng vấn đề là root Saga chỉ chạy lần đầu tiên, ta dispatch 1 action thì nó cũng không chạy lại
// Nếu ta muốn lắng nghe cụ thể 1 action nào đó thì ta phải khai báo
