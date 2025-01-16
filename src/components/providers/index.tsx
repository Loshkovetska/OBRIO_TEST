"use client";
import { AppStore, store } from "@/lib/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";

type PageWrapperPropType = {
  className: string;
} & React.PropsWithChildren;

export default function Providers(props: React.PropsWithChildren) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{props.children}</Provider>;
}
