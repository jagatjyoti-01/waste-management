import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
// import './App.css'
import { BrowserRouter,Route, Routes } from "react-router-dom"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
