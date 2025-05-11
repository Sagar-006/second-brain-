import { Dashboard } from "./pages/Dashboard";
import "./index.css"; // Only import this once at the root level
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ShareIcon } from "./icons/ShareIcon";
import { Comp } from "./pages/Comp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:shareLink" element={<Comp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
