import axios from "axios";

export async function login(credentials: { email: string; password: string }) {
  const response = await axios.post("/api/login", credentials);
  return response.data; // O backend retorna { token }
}
