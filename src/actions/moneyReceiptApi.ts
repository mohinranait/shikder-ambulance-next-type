import { TReceipt } from "@/types/receip.type";

  // Create new Receipt
export const createReceipt = async (data:TReceipt)=> {
  const res = await fetch(`/api/money`,{
    method:"POST",
    headers:{
      "Content-type":"Application/json"
    },
    credentials:'include',
    body: JSON.stringify(data)
  })
  return await res.json();
} 


// Update money receipt
export const updateReceiptById = async ({data,id}:{data:TReceipt;id:string})=> {
  const res = await fetch(`/api/money/${id}`,{
    method:"PATCH",
    headers:{
      "Content-type":"Application/json"
    },
    credentials:'include',
    body: JSON.stringify(data)
  })
  return await res.json();
}


export const getAllReceipts = async () => {
    try {
        const res = await fetch(`/api/money`,{
          method:"GET",
          credentials:"include",
        });
        return await res.json();
    } catch (error) {
        return error
    }
}


export const deleteReceiptById = async (id:string)=> {
  const res = await fetch(`/api/money/${id}`,{
    method:"DELETE",
    headers:{
      "Content-type":"Application/json"
    },
    credentials:'include',
  })
  return await res.json();
} 