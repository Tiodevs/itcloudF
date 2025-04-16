'use client'

import styles from "./page.module.scss";
import { Header } from "../components/header";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { handleBlogs } from "../actions/serverActions";
import { Form } from "../components/form";

export default function Home() {
  // Altere o valor inicial de blogs para um array vazio
  const [blogs, setBlogs] = useState<any[]>([]);

  // Estado para controlar o carregamento dos blogs
  const [isLoading, setIsLoading] = useState(true);

  // USEEFFECTS
  useEffect(() => {
    async function getBlogs() {
      try {
        const responseBlogs = await handleBlogs();
        console.log("Blogs recebidos:", responseBlogs.blog);
        
        // Verifique se a resposta é um array antes de definir no estado
        if (Array.isArray(responseBlogs.blog)) {
          setBlogs(responseBlogs.blog);
        } else {
          console.error("Resposta não é um array:", responseBlogs);
          setBlogs([]);  // Se a resposta não for um array, definir como um array vazio
        }
      } catch (error) {
        console.error("Erro ao carregar os blogs:", error);
        setBlogs([]);  // Caso de erro, garantir que blogs seja um array vazio
      } finally {
        setIsLoading(false); // Após a obtenção dos dados, remove o carregamento
      }
    }

    getBlogs();
  }, []);

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
        <Header />

        <Form/>
      </main>
    </div>
  );
}
