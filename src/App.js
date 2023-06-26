import { Route, Routes } from "react-router-dom";
import { CarDetails, CarsList, Feedbacks, ForgetPassword, Home, Login, MyBookings, MyCars, Settings, Signup } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<CarsList />} />
                <Route path="/details" element={<CarDetails />} />
                <Route path="/mybookings" element={<MyBookings />} />
                <Route path="/mycars" element={<MyCars />} />
                <Route path="/feedbacks" element={<Feedbacks />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/forgetpass" element={<ForgetPassword />} />
            </Routes>
        </>
    );
}

export default App;
