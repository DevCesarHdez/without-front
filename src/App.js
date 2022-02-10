import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Recover from "./Components/Recover/Recover";
import Signup from "./Components/Signup/Signup";
import SnackbarProvider from "./Context/SnackbarContext/SnackbarContext";

export default function App() {
  return (
    <SnackbarProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<Recover />} />
      </Routes>
    </SnackbarProvider>
  );
}
