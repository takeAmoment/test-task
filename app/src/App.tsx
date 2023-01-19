import Layout from "./components/Layout/Layout";
import React from "react";
import MainPage from "pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { setupStore } from "store/store";

function App() {
  return (
    <Provider store={setupStore()}>
      <Layout>
        <MainPage />
      </Layout>
    </Provider>
  );
}

export default App;
