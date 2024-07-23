import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Logincontextprovider from "./Logincontext.jsx";
 

ReactDOM.createRoot(document.getElementById("root")).render(

<Logincontextprovider>
<BrowserRouter>

<App/>
</BrowserRouter>
</Logincontextprovider>
);
