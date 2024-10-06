import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/login",
      req.body,
    );

    const { username, password } = req.body;

    if (username !== "valid_username" || password !== "valid_password") {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.data) {
      console.error("Login failed", axiosError.response.data);
    } else {
      console.error("Login failed", "Unexpected error occured");
    }
  }
}