import { NextResponse } from 'next/server';
import { api } from '../../../services/api';

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
    
    const response = await api.put("/blog", { id, titulo, texto, Banner });
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Erro ao atualizar blog:", error);
    return NextResponse.json(
      { error: 'Erro ao atualizar o blog' }, 
      { status: 500 }
    );
  }
} 