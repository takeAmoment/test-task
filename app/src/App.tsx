import Layout from "./components/Layout/Layout";
import React from "react";
import MainPage from "pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { setupStore } from "store/store";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Provider store={setupStore()}>
        <Layout>
          <MainPage />
        </Layout>
      </Provider>
    </HashRouter>
  );
}

export default App;
