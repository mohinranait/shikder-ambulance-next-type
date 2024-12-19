import { instance } from "@/hooks/useAxios"

export const getAllMedia = async () => {
    try {
        const {data} = await instance.get(`/media`);
        return data
    } catch (error) {
        return error
    }
}

// Get all posts with query
export const getPosts = async () => {
    try {
        const {data} = await instance.get(`/posts`);
        return data;
    } catch (error) {
        return error
    }
}