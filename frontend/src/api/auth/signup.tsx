import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

const BACKEND_URL = process.env.BACKEND_URL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await axios.post(
      `${BACKEND_URL}/signup`,
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
    return res.status(response.status).json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    
    console.error("Registration failed", axiosError.response?.data || axiosError.message);
    
    return res.status(axiosError.response?.status || 500).json({
      error: axiosError.response?.data || 'Registration failed',
    });
  }
}