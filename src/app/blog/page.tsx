'use client'

import styles from "./page.module.scss";
import { Header } from "../components/header";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { handleBlogs } from "../actions/serverActions";

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
          <h1>Nossos blogs</h1>
          <p>Fique sempre atualizado através do nosso blog</p>
        </div>

        {/* Exibição do spinner enquanto os blogs estão sendo carregados */}
        {isLoading ? (
          <div className={styles.spinner}>
            <img src="/spinner.gif" alt="Carregando..." /> {/* Imagem de spinner */}
          </div>
        ) : (
          <div className={styles.posts}>
            {/* Renderiza os blogs usando map */}
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
        )}

<div className={styles.cta2}>
                    <h1 className={styles.ctatitle}>Você está preparado para o <span>próximo passo?</span></h1>
                    <div>
                        <p>Descubra como a Cloud IT Solutions pode transformar seu negócio—entre em contato e dê o primeiro passo rumo à inovação!</p>
                        <div className={styles.ctabtn}>
                            <a href="/contact" className={styles.btnctamain}>Começe agora</a>
                        </div>
                    </div>
                </div>

        <footer className={styles.footer}>
                    <div className={styles.footercontent}>
                        <h3>Contato</h3>
                        <p>Estamos prontos para ajudar seu negócio a alcançar novas alturas! Entre em contato com a Cloud IT Solutions hoje mesmo e saiba como nossas soluções personalizadas podem atender às suas necessidades. Sua jornada rumo à inovação começa aqui!
                        </p>
                        <div className={styles.footerlinks}>
                            <a href="mailto:comercial@cloudconsulting.com.br">
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
                            <a href="https://www.instagram.com/sapeia_/">
                                <Image
                                    alt="Logo Sujeito Pizza"
                                    src={"/iconinstagram.png"}
                                    width={24}
                                    height={24}
                                    priority={true}
                                    quality={100}
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/cloud-itsolutions/">
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
