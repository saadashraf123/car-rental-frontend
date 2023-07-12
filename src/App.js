import { Route, Routes } from "react-router-dom";
import { AddCar, CarDetails, CarsList, CreateNewPassword, Feedbacks, ForgetPassword, Home, Login, MyBookings, MyCars, Settings, Signup, VerifyCode, UpdateUserProfile } from "./pages";
import { Layout } from "./pages";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<CarsList />} />
                    <Route path="/details" element={<CarDetails />} />
                    <Route path="/mybookings" element={<MyBookings />} />
                    <Route path="/mycars" element={<MyCars />} />
                    <Route path="/feedbacks" element={<Feedbacks />} />
                    <Route path="/settings" element={<Settings />} />
                <Route path="/addcar" element={<AddCar />} />
                    <Route path="/UpdateUserProfile" element={<UpdateUserProfile />} />


                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route path="/verifyCode" element={<VerifyCode />} />
                <Route path="/createNewPassword" element={<CreateNewPassword />} />
            </Routes>
        </>
    );
}

export default App;
