import React from "react";
import AppLayout from "./layout/AppLayout";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ComparisonPage from "./pages/ComparisonPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/textcompare" replace />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/textcompare" element={<ComparisonPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
