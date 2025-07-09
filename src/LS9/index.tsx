import React from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter, Route, Routes } from "react-router";
import BT1 from "./BT1";
import BT2 from "./BT2";

type Props = {};

export default function LS9({}: Props) {
  return (
    <Routes>
      <Route path="bt1/*" element={<BT1 />} />
      <Route path="bt2/*" element={<BT2 />} />
    </Routes>
  );
}
