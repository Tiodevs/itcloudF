import { NextResponse } from 'next/server';
import { api } from '../../../services/api';

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
    
    const response = await api.post("/blog", { titulo, texto, Banner });
    
    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar blog:", error);
    return NextResponse.json(
      { error: 'Erro ao criar o blog' }, 
      { status: 500 }
    );
  }
} 