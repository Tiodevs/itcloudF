"use server";

import { api } from "../services/api";

export async function handleBlogs() {
  
    try {
      const response = await api.get("/blog");
  
      console.log("Blogs achados", response.data)
      const blog = response.data
  
      return { blog }
  
  
    } catch (err: any) {
      console.log("Erro ::::", err.data)
      throw new Error(err.message);
    }
  }

// Função para lidar com o envio do formulário
export async function handleLead(data: { nome: string; email: string; numero: string }) {
  try {
    // Envia os dados para a API de lead
    const response = await api.post("/lead", data);

    console.log("Lead enviado com sucesso", response.data);
    return response.data;  // Retorna a resposta da API
  } catch (err: any) {
    console.error("Erro ao enviar o lead:", err);
    throw new Error(err.message);
  }
}