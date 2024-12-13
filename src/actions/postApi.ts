import { instance } from "@/hooks/useAxios"

export const getAllMedia = async () => {
    try {
        const {data} = await instance.get(`/media`);
        return data
    } catch (error) {
        return error
    }
}