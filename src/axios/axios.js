import axios from "axios";
import { toast } from "react-toastify";


const client = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export const createHandler = async(data) => {
    try {
        const response = await client.post(`/create`, data);
        if (response.status === 201) {
            return response;
        }
    } catch (error) {
        console.log(error);
    }
};

export const getHandler = async() => {
    try {
        const response = await client.get(`/getall`);
        if (response.status === 201) {
            return response;
        }
    } catch (error) {
        console.log(error);
    }
}

export const getOneHandler = async(id) => {
    try {
        const response = await client.get(`/get/${id}`);
        if (response.status === 201) {
            return response.data.campaign;
        }
    } catch (error) {
        console.log(error);
    }
}

export const updateHandler = async(data, id, refetch) => {
    try {
        const response = await client.put(`/update/${id}`, data);
        if (response.status === 201) {
            refetch();
            return response.data.campaign;
        }
    } catch (error) {
        console.log(error);
    }
}