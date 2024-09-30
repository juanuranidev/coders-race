import request from "services/request";

export const createUserApi = async (user: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "/users",
      data: user,
    });

    return response.data;
  } catch (error) {
    console.error("API error:", error);
    throw new Error("Failed to create user in the API");
  }
};
