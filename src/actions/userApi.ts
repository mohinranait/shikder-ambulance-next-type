/**
 * Login User
*/
export const loginUser = async ({
  password,
  email,
}: {
  password: string;
  email: string;
}) => {
  const res = await fetch(`/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({ password, email }),
  });

  return await res.json();
};

// Authentiated user 
export const getAuthUser = async () => {
    const res = await fetch(`/api/user/auth`,{
        method: "GET",
        credentials:"include",
        headers: {
            "Content-Type": "application/json",
        },
    })
    if (!res.ok) {
        throw new Error("Unauthorized or failed to fetch user");
    }

    return await res.json();
}


// logout user
export const logoutUser = async () => {
    const res =await fetch(`/api/user/auth`,{
        method:"DELETE",
        credentials:'include',
        headers:{
            "Content-type":"Application/json"
        }
    }) 
    return await res.json()
}
