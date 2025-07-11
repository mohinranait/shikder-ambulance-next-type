export const uploadToCloud = async (data: FormData) => {
  const res = await fetch("/api/media", {
    method: "POST",
    body: data,
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text(); 
    throw new Error(`Upload failed: ${res.status} - ${text}`);
  }

  return await res.json();
};
