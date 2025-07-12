import { BASE_URL } from "@/config/accessEnv";
import { Tcomment } from "@/types/comment.type";
  // Create new Receipt
export const createComment = async ({data, userId}:{data:Tcomment, userId:string})=> {
  const res = await fetch(`/api/comment/${userId}`,{
    method:"POST",
    headers:{
      "Content-type":"Application/json"
    },
    credentials:'include',
    body: JSON.stringify(data)
  })
  return await res.json();
} 



export const getAllCommentByPostId = async (postId:string) => {
    try {
        const res = await fetch(`${BASE_URL}/api/comment?postId=${postId}`,{
          method:"GET",
          credentials:"include",
        });
        return await res.json();
    } catch (error) {
        return error
    }
}
