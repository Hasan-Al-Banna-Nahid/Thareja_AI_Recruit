"use client";
import { SET_EXPAND } from "@/Redux/Features/rootModyfier/Modyfier";

import { RootState } from "@/Redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BodyEventListeners = () => {
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleListeners = () => {
      console.log("body clicked");
      if (!EXPAND) return;
      dispatch(SET_EXPAND(null));
    };

    document.body.addEventListener("click", handleListeners);

    return () => {
      document.body.removeEventListener("click", handleListeners);
    };
  });
  return <></>;
};

export default BodyEventListeners;
