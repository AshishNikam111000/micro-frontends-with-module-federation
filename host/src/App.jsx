import { lazy, Suspense } from 'react';
import { Footer } from "./components";
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RemoteHeaderErrorBoundary = lazy(() => import("slb_gui_components/App").catch(() => ({ default: () => (<div style={{ fontSize: "20px", backgroundColor: "#ff8c7b", display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}> Error loading remote component!!! </div>) })));
const RemoteMainPageErrorBoundary = lazy(() => import("slb_gui_components/MainPage").catch(() => ({ default: () => (<div style={{ fontSize: "20px", backgroundColor: "#ff8c7b", display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}> Error loading remote component!!! </div>) })));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/configurations/networkentity" element={<>THIS IS HOST CONFIG PAGE</>} />
        <Route index path="/*" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{display:"flex", flexDirection: "column", height: "90vh"}}>
        <Footer />
        <div style={{fontSize: "40px", backgroundColor: "#ffed65", width: "100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
          <RemoteMainPageErrorBoundary />
        </div>
        <Footer />
      </div>
    </Suspense>
  )
}

export default App;