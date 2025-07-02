export const login = async (data) => {
  try {
    const response = await fetch("https://app.quickly.codes/midzilla/public/api/admin/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonData = await response.json();

    if (!response.ok) {
      throw new Error(jsonData.message || 'Login failed');
    }

    return jsonData.data;
  } catch (error) {
    throw error;
  }
};
