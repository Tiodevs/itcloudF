'use client'

import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { handleBlogs } from "../../../../actions/serverActions"; // Mantemos esta função apenas para buscar dados

interface BlogData {
  id: string;
  titulo: string;
  texto: string;
  Banner: string;
  createdAt: string;
}

export default function EditarBlog({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [formData, setFormData] = useState({
    titulo: '',
    texto: '',
    Banner: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    async function loadBlog() {
      try {
        setIsLoading(true);
        // Ainda podemos usar handleBlogs para obter os dados
        const response = await handleBlogs();
        
        if (!response.blog || !Array.isArray(response.blog)) {
          throw new Error("Falha ao buscar blogs");
        }
        
        const blogData = response.blog.find((b: any) => b.id === params.id);
        
        if (!blogData) {
          throw new Error("Blog não encontrado");
        }
        
        setBlog(blogData);
        setFormData({
          titulo: blogData.titulo,
          texto: blogData.texto,
          Banner: blogData.Banner
        });
      } catch (error: any) {
        setError(error.message || 'Erro ao carregar o blog');
        console.error('Erro ao carregar o blog:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadBlog();
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.titulo.trim() || !formData.texto.trim() || !formData.Banner.trim()) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    try {
      setIsLoading(true);
      // Usar a nova API route em vez da função de servidor
      const response = await axios.put('/api/blog/update', {
        id: params.id,
        ...formData
      });
      
      setSuccess('Blog atualizado com sucesso!');
      setError('');
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        router.push('/adm/blogs');
      }, 2000);
    } catch (error: any) {
      console.error('Erro ao atualizar o blog:', error);
      let errorMessage = 'Erro ao atualizar o blog';
      
      if (error.response) {
        // Erro da resposta (status código 4xx, 5xx)
        errorMessage = error.response.data?.error || 
                      `Erro ${error.response.status}: ${error.response.statusText}`;
        console.error('Detalhes da resposta:', error.response.data);
      } else if (error.request) {
        // Erro na requisição (sem resposta)
        errorMessage = 'Erro de conexão com o servidor. Tente novamente mais tarde.';
        console.error('Detalhes da requisição:', error.request);
      } else {
        // Outros erros
        errorMessage = error.message || errorMessage;
      }
      
      setError(errorMessage);
      setSuccess('');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Editar Blog</h1>
            <p>Atualize o conteúdo do seu blog</p>
            <a href="/adm/blogs" className={styles.btn}>Voltar para os blogs</a>
          </div>

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          {success && (
            <div className={styles.successMessage}>
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="Banner">Banner (URL da imagem)</label>
              <input
                type="text"
                id="Banner"
                name="Banner"
                value={formData.Banner}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="texto">Conteúdo</label>
              <textarea
                id="texto"
                name="texto"
                value={formData.texto}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formActions}>
              <button type="button" onClick={() => router.push('/adm/blogs')} className={styles.btn}>
                Cancelar
              </button>
              <button type="submit" className={`${styles.btn} ${styles.btnSuccess}`} disabled={isLoading}>
                Salvar alterações
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 