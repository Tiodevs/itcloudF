'use client'

import styles from "./page.module.scss";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function NovoBlog() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: '',
    texto: '',
    Banner: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
      const response = await axios.post('/api/blog/create', formData);
      
      setSuccess('Blog criado com sucesso!');
      setError('');
      
      // Limpar o formulário após sucesso
      setFormData({
        titulo: '',
        texto: '',
        Banner: ''
      });
      
      // Redirecionar após 2 segundos
      setTimeout(() => {
        router.push('/adm/blogs');
      }, 2000);
    } catch (error: any) {
      console.error('Erro ao criar o blog:', error);
      let errorMessage = 'Erro ao criar o blog';
      
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

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Novo Blog</h1>
            <p>Crie um novo conteúdo para o seu blog</p>
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
                placeholder="Digite o título do blog"
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
                placeholder="Digite a URL da imagem de capa"
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
                placeholder="Digite o conteúdo do blog..."
              />
            </div>

            <div className={styles.formActions}>
              <button type="button" onClick={() => router.push('/adm/blogs')} className={styles.btn}>
                Cancelar
              </button>
              <button type="submit" className={`${styles.btn} ${styles.btnSuccess}`} disabled={isLoading}>
                {isLoading ? 'Criando...' : 'Criar Blog'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 