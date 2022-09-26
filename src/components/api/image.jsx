import axios from "axios";

const instance = axios.create({
    baseURL: "https://pixabay.com/api/?q=cat&page=1&key=29410547-eff01d8a7b7e1538418c57ece&image_type=photo&orientation=horizontal",
    params: {
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

