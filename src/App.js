import './App.css';
import React, { Suspense } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { AppRoutes, createRoute } from 'routes/Routes';

const LoadingFallback = () => {
  return <div>Loading...</div>;
};

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route, index) => createRoute(route, index))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
