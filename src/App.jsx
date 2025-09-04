import React from "react";
import Layout from "./Layout";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ComparisonPage from "./pages/ComparisonPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
      </Route>
    </Routes>
  );
}
