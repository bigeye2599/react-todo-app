import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import { all } from "redux-saga/effects";
import { todoSage } from "./sagas/todoSaga";
import createSagaMiddleware from "redux-saga";

const sageMiddleware = createSagaMiddleware();

function createStore() {
  function* rootSage() {
    yield all([todoSage()]);
  }

  const store = configureStore({
    reducer: {
      todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sageMiddleware),
  });

  sageMiddleware.run(rootSage);

  return store;
}

const store = createStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
