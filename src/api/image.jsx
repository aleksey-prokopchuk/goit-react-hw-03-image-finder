import axios from "axios";

const URL = 'https://pixabay.com/api/';

const instance = axios.create({
    baseURL: `${URL}`,
    params: {
        key: '29410547-eff01d8a7b7e1538418c57ece',
        image_type: 'photo',
        orientation: 'horizontal',
        page: 1,
        per_page: 12,
    }
});

export const searchImage = async (q, page = 1) => {
    const { data } = await instance.get("/", {
        params: {
            page,
            q,
        }
    });
    return data;
};

