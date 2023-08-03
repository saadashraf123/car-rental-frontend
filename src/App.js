import { Route, Routes } from "react-router-dom";
import { AddCar, CarDetails, CarsList, CreateNewPassword, Feedbacks, ForgetPassword, Home, Login, MyBookings, MyCars, Settings, Signup, UpdatePassword, UpdateUserProfile } from "./pages";
import { Layout } from "./pages";
import { useEffect } from "react";
import useFetch from "./Hooks/useFetch";
import { useStateContext } from './Contexts/stateContext';
import swal from 'sweetalert';

function App() {
    const { setUser, user } = useStateContext()
    const url = {
        method: 'GET',
        url: `auth/me`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    const { data, fetchApi } = useFetch();
    useEffect(() => {
        fetchApi(url)
            .then(() => {
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        setUser(data?.user)
    }, [data])

    return (
        <>
            <Routes>
                <Route path="car-rental-frontend" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="search" element={<CarsList />} />
                    <Route path="details" element={<CarDetails />} />
                    <Route path="mybookings" element={user ? <MyBookings /> : <Login />} />
                    <Route path="mycars" element={user ? <MyCars /> : <Login />} />
                    <Route path="feedbacks" element={user ? <Feedbacks /> : <Login />} />
                    <Route path="settings" element={user ? <Settings /> : <Login />} />
                    <Route path="addcar" element={user ? <AddCar /> : <Login />} />
                    <Route path="UpdateUserProfile" element={user ? <UpdateUserProfile /> : <Login />} />
                    <Route path="UpdatePassword" element={user ? <UpdatePassword /> : <Login />} />
                </Route>
                <Route path="car-rental-frontend/login" element={<Login />} />
                <Route path="car-rental-frontend/signup" element={<Signup />} />
                <Route path="car-rental-frontend/forgetpassword" element={<ForgetPassword />} />
                <Route path="car-rental-frontend/createNewPassword/:token" element={<CreateNewPassword />} />
            </Routes>
        </>
    );
}

export default App;
