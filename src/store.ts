import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import { all } from "redux-saga/effects";
import { todoSage } from "./sagas/todoSaga";
import createSagaMiddleware from "redux-saga";
import { commonSage } from "./sagas/common.Sage";
import commonReducer from "./slices/commonSlice";

const sageMiddleware = createSagaMiddleware();

function createStore() {
  function* rootSage() {
    yield all([todoSage(), commonSage()]);
  }

  const store = configureStore({
    reducer: {
      todo: todoReducer,
      common: commonReducer,
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
