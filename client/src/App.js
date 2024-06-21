// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { themeSettings } from "theme";
// import Layout from "scenes/layout";
// import Dashboard from "scenes/dashboard";
// import Products from "scenes/products";
// import Customers from "scenes/customers";
// import Transactions from "scenes/transactions";
//  import Geography from "scenes/geography";
// import Overview from "scenes/overview";
// import Daily from "scenes/daily";
// import Monthly from "scenes/monthly";
// import Breakdown from "scenes/breakdown";
// // import Admin from "scenes/admin";
// import Performance from "scenes/performance";
// import Login from "scenes/login"; // Import the Login component
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//   const mode = useSelector((state) => state.global.mode);
//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID; 
//   return (
//     <div className="app">
//       <BrowserRouter>
//         <GoogleOAuthProvider clientId={clientId}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route element={<Layout />}>
//               <Route path="/" element={<Navigate to="/dashboard" replace />} />
//               <Route element={<PrivateRoute />}>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/customers" element={<Customers />} />
//               <Route path="/transactions" element={<Transactions />} />
//               <Route path="/geography" element={<Geography />} />
//               <Route path="/overview" element={<Overview />} />
//               <Route path="/daily" element={<Daily />} />
//               <Route path="/monthly" element={<Monthly />} />
//               <Route path="/breakdown" element={<Breakdown />} />
//               {/* <Route path="/admin" element={<Admin />} /> */}
//               <Route path="/performance" element={<Performance />} />
//               </Route>
//             </Route>
//           </Routes>
//         </ThemeProvider>
//         </GoogleOAuthProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// src/App.js
// src/App.js
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Performance from "scenes/performance";
import Login from "scenes/login"; // Import the Login component
import { GoogleOAuthProvider } from '@react-oauth/google';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="app">
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="/overview" element={<Overview />} />
                  <Route path="/daily" element={<Daily />} />
                  <Route path="/monthly" element={<Monthly />} />
                  <Route path="/breakdown" element={<Breakdown />} />
                  {/* <Route path="/admin" element={<Admin />} /> */}
                  <Route path="/performance" element={<Performance />} />
                </Route>
              </Route>
            </Routes>
          </ThemeProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;