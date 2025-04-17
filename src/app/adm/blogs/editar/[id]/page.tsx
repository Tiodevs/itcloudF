'use client'

import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { getBlogById, updateBlog } from "../../../../actions/serverActions";
import { useRouter } from 'next/navigation';

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
        const blogData = await getBlogById(params.id);
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
      await updateBlog({
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
      setError(error.message || 'Erro ao atualizar o blog');
      setSuccess('');
      console.error('Erro ao atualizar o blog:', error);
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