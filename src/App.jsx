import "./App.css";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthContext";
import Registration from "./pages/Registration";

function App() {
  return (
    // <AuthProvider>
    //   <Login />
    // </AuthProvider>
    <Registration />
  );
}

export default App;
