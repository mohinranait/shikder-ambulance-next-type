

import { BASE_URL } from "@/config/accessEnv";
import { TPostFormData } from "@/types/post.types";
type TQuery = {
    limit?: string;
    access?: string;
    search?: string;
  };



  // Create new post
export const createPost = async (data:TPostFormData)=> {
  const res = await fetch(`/api/posts`,{
    method:"POST",
    headers:{
      "Content-type":"Application/json"
    },
    credentials:'include',
    body: JSON.stringify(data)
  })
  return await res.json();
} 

// Update post
export const updatePostById = async ({data,id}:{data:TPostFormData;id:string})=> {
  const res = await fetch(`/api/posts/${id}`,{
    method:"PATCH",
    headers:{
      "Content-type":"Application/json"
    },
    credentials:'include',
    body: JSON.stringify(data)
  })
  return await res.json();
} 

// Delete post by POST ID
export const deletePostById = async (id:string)=> {
  const res = await fetch(`/api/posts/${id}`,{
    method:"DELETE",
    headers:{
      "Content-type":"Application/json"
    },
    credentials:'include',
  })
  return await res.json();
} 

export const getAllMedia = async () => {
    try {
        const res = await fetch(`/api/media`,{
          method:"GET",
          credentials:"include",
        });
        return await res.json();
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
        const res = await fetch(`/api/posts?${queryString}`);
        const data = await res.json()
        return data;
    } catch (error) {
        return error
    }
}


/**
 * Get single post by slug
*/
export const getSinglePostBySlug = async (slug:string) => {
      const res = await fetch(`${BASE_URL}/api/posts/slug/${slug}`, {
        cache: "no-store",
      });
      return  await res.json();
}