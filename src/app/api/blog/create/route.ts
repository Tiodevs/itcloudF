import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { titulo, texto, Banner } = body;
    
    if (!titulo || !texto || !Banner) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' }, 
        { status: 400 }
      );
    }
    
    // Usar o axios diretamente com a URL completa do backend
    const backendUrl = process.env.NEXT_PUBLIC_API || 'https://itcloudapi.vercel.app';
    const response = await axios.post(`${backendUrl}/blog`, { 
      titulo, 
      texto, 
      Banner 
    });
    
    return NextResponse.json(response.data, { status: 201 });
  } catch (error: any) {
    console.error("Erro ao criar blog:", error);
    // Adicionar mais detalhes do erro para depuração
    const errorMessage = error.response?.data?.error || error.message || 'Erro ao criar o blog';
    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    );
  }
} 