import { PayloadAction } from "@reduxjs/toolkit";
import { login as loginApi } from "../services/userApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { login, setUser } from "../slices/commonSlice";

function* loginSage(
  action: PayloadAction<{ username: string; password: string }>
) {
  // login logic
  const user: { username: string } = yield call(
    loginApi,
    action.payload.username,
    action.payload.password
  );
  //set user in state
  yield put(setUser(user));
}

export function* commonSage() {
  yield takeLatest(login, loginSage);
}
