import { BASE_URL } from "@/config/accessEnv";
import { instance } from "@/hooks/useAxios"
type TQuery = {
    limit?: string;
    access?: string;
    search?: string;
  };

export const getAllMedia = async () => {
    try {
        const {data} = await instance.get(`/media`);
        return data
    } catch (error) {
        return error
    }
}

// Get all posts with query
export const getPosts = async ({
    limit = "20",
    access = "user",
    search = "",
  }) => {
    const query: TQuery = {
        limit,
        access,
        search,
      };
  
      const queryString = new URLSearchParams(
        Object.fromEntries(Object.entries(query).filter(([_, v]) => v != null))
      ).toString();
    try {
        const {data} = await instance.get(`/posts?${queryString}`);
        return data;
    } catch (error) {
        return error
    }
}


/**
 * Get single post by slug
*/
export const getSinglePostBySlug = async (slug:string) => {
      const res = await fetch(`${BASE_URL}/post/${slug}`, {
        cache: "no-store",
      });
      return  await res.json();
}