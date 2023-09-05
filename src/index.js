import React from "react";
import ReactDOM  from "react-dom";
import App from "./component/App";
import { UserProvider } from './component/UserContext'; // Import the UserProvider


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <UserProvider>
      <App />
    </UserProvider>
    </React.StrictMode>,
  )