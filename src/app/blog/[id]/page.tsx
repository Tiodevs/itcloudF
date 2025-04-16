'use client'

import styles from "./page.module.scss";
import { Header } from "../../components/header";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { handleBlogs } from "../../actions/serverActions";
import { IdBlog } from "@/app/components/IdEmpresaComponent";

export default function Home() {
  const idBlog = decodeURIComponent(IdBlog() as string).trim();
  console.log(idBlog)

  // Altere o valor inicial de blogs para um array vazio
  const [blogs, setBlogs] = useState<any[]>([]);
  // Altere o valor inicial de blogs para um array vazio
  const [blogAtual, setBlogAtual] = useState<any | null>(null); // Agora é um objeto ou null

  // Estado para controlar o carregamento dos blogs
  const [isLoading, setIsLoading] = useState(true);

  // USEEFFECTS
  useEffect(() => {
    async function getBlogs() {
      try {
        const responseBlogs = await handleBlogs();
        console.log("Blogs recebidos:", responseBlogs.blog);

        const allBlogs = responseBlogs.blog

        const getBlogAtual = allBlogs.find((blog: any) => blog.id === idBlog) as any

        console.log("Blog atual:", getBlogAtual)

        setBlogAtual(getBlogAtual)


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
        <Image
          alt="Logo Sujeito Pizza"
          src={"/capahome.png"}
          className={styles.capa}
          width={1920}
          height={670}
          priority={true}
          quality={100}
        />

        <div className={styles.headerline}>
          <h1>{blogAtual?.titulo}</h1>
          <p dangerouslySetInnerHTML={{ __html: blogAtual?.texto.replace(/\n/g, '<br />') }}></p>
        </div>

        <div className={styles.posts}>


        {blogs.length > 0 ? (
          blogs.map((blog) => {
            // Limita o texto para os primeiros 100 caracteres
            const limitedText = blog.texto.substring(0, 100);

            // Substitui as quebras de linha (\n) por <br /> para que o HTML seja interpretado
            const textWithLineBreaks = limitedText.replace(/\n/g, '<br />');

            return (
              <a href={"/blog/" + blog.id} key={blog.id}>
                <div className={styles.post}>
                  <h2>{blog.titulo}</h2>
                  <p className={styles.postdate}>
                    {new Date(blog.createdAt).toLocaleDateString()} | {new Date(blog.createdAt).toLocaleTimeString()}
                  </p>
                  {/* Utilizando dangerouslySetInnerHTML para renderizar o texto com quebras de linha */}
                  <p dangerouslySetInnerHTML={{ __html: textWithLineBreaks }}></p>
                  <a href={"/blog/" + blog.id} className={styles.readMore}>Ler mais</a> {/* Link para ler mais */}
                </div>
              </a>
            );
          })
        ) : (
          <p>Não há blogs para exibir no momento.</p>
        )}
        </div>


        <div className={styles.cta}>
          <h1 className={styles.ctatitle}>Are you ready for the <span>next step?</span></h1>
          <div>
            <p>Discover how Cloud IT Solutions can transform your business—get in touch and take the first step towards innovation!</p>
            <div className={styles.ctabtn}>
              <a href="">Start now</a>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footercontent}>
            <h3>Contact</h3>
            <p>We are ready to help your business reach new heights! Contact Cloud IT Solutions today and learn how our tailored solutions can meet your needs. Your journey towards innovation starts here!</p>
            <div className={styles.footerlinks}>
              <a href="">
                <Image
                  alt="Logo Sujeito Pizza"
                  src={"/iconemail.png"}
                  width={24}
                  height={24}
                  priority={true}
                  quality={100}
                />
                comercial@cloudconsulting.com.br
              </a>
              <a href="">
                <Image
                  alt="Logo Sujeito Pizza"
                  src={"/iconinstagram.png"}
                  width={24}
                  height={24}
                  priority={true}
                  quality={100}
                />
              </a>
              <a href="">
                <Image
                  alt="Logo Sujeito Pizza"
                  src={"/linkedin.png"}
                  width={24}
                  height={24}
                  priority={true}
                  quality={100}
                />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
