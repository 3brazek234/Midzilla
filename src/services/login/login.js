
export const login = async (data) => {
  const response = await fetch("/admin/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
