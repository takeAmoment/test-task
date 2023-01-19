import Layout from "./components/Layout/Layout";
import React from "react";
import MainPage from "pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { setupStore } from "store/store";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={setupStore()}>
        <Layout>
          <MainPage />
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
