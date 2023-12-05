import React from "react";
import { Routes, Route } from "react-router-dom";
import { Consents, GiveConsent } from "./Containers";
import { Sidebar } from "./Components";
import { UI_ROUTES } from "./utils/routes";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Sidebar />
      <div className={styles.view}>
        <Routes>
          <Route path={UI_ROUTES.giveConsent} element={<GiveConsent />} />
          <Route path={UI_ROUTES.consents} element={<Consents />} />
          <Route index element={<GiveConsent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
