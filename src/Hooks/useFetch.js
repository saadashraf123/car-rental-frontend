import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const apiInstance = axios.create({
        baseURL: "https://folio-car-rental-app.azurewebsites.net",
    });

    apiInstance.interceptors.request.use((req) => {
        const token = localStorage.getItem("token")
        if (token) {
            req.headers.Authorization = `Bearer ${token}`
        }
        return req;
    });

    const fetchApi = async (url) => {
        setLoading(true);
        await apiInstance.request(url)
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
            })
    }

    return { data, error, loading, fetchApi }
}

export default useFetch