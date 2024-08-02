"use client";

import { store } from "@/Redux/store";
import { ReduxProviderPropsType } from "@/Types/reduxTypes";
import { FC } from "react";
import { Provider } from "react-redux";

const ReduxProvider: FC<ReduxProviderPropsType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
