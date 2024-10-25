import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";
import "styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import createFirebaseConectionLib from "lib/utils/shared/config/firebase";
import { Provider } from "react-redux";
import { stores } from "store/shared/store";

const queryClient = new QueryClient();

createFirebaseConectionLib();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={stores}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
