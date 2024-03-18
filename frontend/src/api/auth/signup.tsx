import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("Request Body:", req.body);

    // Make a POST request to the other API
    const response = await axios.post(
      "http://localhost:3001/api/signup",
      req.body
    );

    // Send the response from the other API back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.data) {
      // If the other API returned an error response, log it
      console.error("Registration failed", axiosError.response.data);
    } else {
      // If there was an unexpected error, log a generic error message
      console.error("Registration failed", "Unexpected error occurred");
    }

    // Send an error response back to the client
    res.status(axiosError.response?.status || 500).json({
      error: "Registration failed",
    });
  }
}
