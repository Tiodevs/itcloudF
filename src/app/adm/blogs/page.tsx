'use client'

import styles from "./page.module.scss";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { handleBlogs, deleteBlog } from "../../actions/serverActions";

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    blogId: '',
    blogTitle: ''
  });

  console.log("TEste")

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    try {
      setIsLoading(true);
      const response = await handleBlogs();
      
      if (Array.isArray(response.blog)) {
        setBlogs(response.blog);
      } else {
        console.error("Resposta não é um array:", response);
        setBlogs([]);
      }
    } catch (error) {
      console.error("Erro ao carregar os blogs:", error);
      setBlogs([]);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteBlog(id: string) {
    try {
      await deleteBlog(id);
      setConfirmDialog({ isOpen: false, blogId: '', blogTitle: '' });
      
      // Recarregar a lista após deletar
      await loadBlogs();
    } catch (error) {
      console.error("Erro ao deletar o blog:", error);
      alert("Erro ao deletar o blog. Tente novamente.");
    }
  }

  function openConfirmDialog(id: string, title: string) {
    setConfirmDialog({
      isOpen: true,
      blogId: id,
      blogTitle: title
    });
  }

  function closeConfirmDialog() {
    setConfirmDialog({
      isOpen: false,
      blogId: '',
      blogTitle: ''
    });
  }

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
            <h1>Gerenciador de Blogs</h1>
            <p>Gerencie os blogs do seu site</p>
            <div>
              <a href="/adm/blogs/novo" className={`${styles.btn} ${styles.btnSuccess}`}>Criar Novo Blog</a>
              <a href="/" className={styles.btn}>Ir ao site</a>
            </div>
            {/* Botão para criar um novo blog pode ser adicionado aqui */}
          </div>

          {blogs.length > 0 ? (
            <div className={styles.blogList}>
              {blogs.map((blog) => (
                <div key={blog.id} className={styles.blogItem}>
                  <h2>{blog.titulo}</h2>
                  <p className={styles.blogDate}>
                    Criado em: {new Date(blog.createdAt).toLocaleDateString()} às {new Date(blog.createdAt).toLocaleTimeString()}
                  </p>
                  <div 
                    className={styles.blogContent} 
                    dangerouslySetInnerHTML={{ __html: blog.texto.substring(0, 200).replace(/\n/g, '<br />') + (blog.texto.length > 200 ? '...' : '') }}
                  />
                  <div className={styles.blogActions}>
                    <a href={`/blog/${blog.id}`} className={styles.btn} target="_blank">Visualizar</a>
                    <a href={`/adm/blogs/editar/${blog.id}`} className={styles.btn}>Editar</a>
                    <button 
                      className={`${styles.btn} ${styles.btnDanger}`}
                      onClick={() => openConfirmDialog(blog.id, blog.titulo)}
                    >
                      Deletar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3>Nenhum blog encontrado</h3>
              <p>Comece a criar blogs para exibi-los aqui.</p>
              {/* Botão para criar um novo blog pode ser adicionado aqui */}
            </div>
          )}
        </div>

        {confirmDialog.isOpen && (
          <div className={styles.confirmDialog}>
            <div className={styles.dialogContent}>
              <h3>Confirmar exclusão</h3>
              <p>Tem certeza que deseja excluir o blog "{confirmDialog.blogTitle}"?</p>
              <p>Esta ação não pode ser desfeita.</p>
              <div className={styles.dialogActions}>
                <button 
                  className="cancelBtn"
                  onClick={closeConfirmDialog}
                >
                  Cancelar
                </button>
                <button 
                  className="confirmBtn"
                  onClick={() => handleDeleteBlog(confirmDialog.blogId)}
                >
                  Confirmar exclusão
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 