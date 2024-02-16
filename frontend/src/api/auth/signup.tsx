import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    console.log("Request Body:", req.body);
    const response = await axios.post(
      "http://localhost:3001/api/signup",
      req.body,
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.data) {
      console.error("Registration failed", axiosError.response.data);
    } else {
      console.error("Registration failed", "Unexpected error occurred");
    }

    res.status(axiosError.response?.status || 500).json({
      error: "Registration failed",
    });
  }
}