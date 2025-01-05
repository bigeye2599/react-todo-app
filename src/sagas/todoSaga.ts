import { call, put, takeLeading } from "redux-saga/effects";
import {
  fetchTodoFailure,
  fetchTodoRequest,
  fetchTodoSuccess,
} from "../slices/todoSlice";
import { Todo } from "../types";
import { getTodos } from "../services/todoApi";

export function* fetchTodoSage() {
  try {
    const todos: Todo[] = yield call(getTodos);
    yield put(fetchTodoSuccess({ todos }));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchTodoFailure({ error: error.message }));
    } else {
      yield put(fetchTodoFailure({ error: "알 수 없는 에러" }));
    }
  }
}

export function* todoSage() {
  yield takeLeading(fetchTodoRequest, fetchTodoSage);
}
