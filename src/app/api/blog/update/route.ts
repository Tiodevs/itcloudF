import { NextResponse } from 'next/server';
import axios from 'axios';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, titulo, texto, Banner } = body;
    
    if (!id || !titulo || !texto || !Banner) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' }, 
        { status: 400 }
      );
    }
    
    // Usar o axios diretamente com a URL completa do backend
    const backendUrl = process.env.NEXT_PUBLIC_API || 'https://itcloudapi.vercel.app';
    const response = await axios.put(`${backendUrl}/blog`, { 
      id, 
      titulo, 
      texto, 
      Banner 
    });
    
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Erro ao atualizar blog:", error);
    // Adicionar mais detalhes do erro para depuração
    const errorMessage = error.response?.data?.error || error.message || 'Erro ao atualizar o blog';
    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    );
  }
} 