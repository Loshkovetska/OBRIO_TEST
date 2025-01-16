"use client";
import { setInitialState } from "@/lib/slices/quiz-slice";
import { AppStore, store } from "@/lib/store";
import { InitialStateType } from "@/types";
import React, { useRef } from "react";
import { Provider } from "react-redux";

type ProvidersPropType = {
  initData: InitialStateType;
} & React.PropsWithChildren;

export default function Providers({ children, initData }: ProvidersPropType) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = store();
    store().dispatch(setInitialState(initData));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
