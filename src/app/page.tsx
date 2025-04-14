'use client'

import styles from "./page.module.scss";
import { Header } from "./components/header";
import { useRouter } from 'next/navigation';

import Image from 'next/image'

export default function Home() {

    const router = useRouter();

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
                <div className={styles.header}>
                    <h1>
                        Cloud IT Solutions: Sua Parceira em Transformação Digital
                    </h1>

                    <p>
                        A Cloud IT Solutions é uma provedora de soluções de Tecnologia da Informação, especializada em consultoria SAP e serviços relacionados à transformação digital.
                    </p>

                    <div>
                        <a href="" className={styles.btnheade}>Saiba mais</a>
                        <a href="">Entre em contato</a>
                    </div>

                </div>

                <div className={styles.services}>
                    <div className={styles.cardservices}>
                        <Image
                            alt="iconservice1"
                            src={"/iconservice1.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Implantação de Sistemas SAP</h2>
                        <p>Implantação dos módulos SAP (SAP ERP, SAP S/4HANA, S/4HANA Cloud Public Edition e S/4HANA Cloud Private Edition) de acordo com a necessidade específica de cada cliente.</p>
                    </div>
                    <div className={styles.cardservices}>
                    <Image
                            alt="iconservice1"
                            src={"/iconservice2.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Consultoria em Melhoria de Processos</h2>
                        <p>Avaliação e redesenho de processos de negócio com o objetivo de aumentar a eficiência e reduzir custos dos nossos clientes.</p>
                    </div>
                    <div className={styles.cardservices}>
                    <Image
                            alt="iconservice1"
                            src={"/iconservice3.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Migração para soluções em Nuvem</h2>
                        <p>Auxílio na migração de sistemas SAP para soluções em nuvem, como SAP S/4HANA Cloud, visando uma maior flexibilidade e escalabilidade de nossos clientes.</p>
                    </div>
                    <div className={styles.cardservices}>
                    <Image
                            alt="iconservice1"
                            src={"/iconservice4.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Otimização de Licenças</h2>
                        <p>Consultoria sobre o uso eficiente das licenças SAP e sobre a escolha de soluções que melhor atendam às necessidades da empresa.</p>
                    </div>
                    <div className={styles.cardservices}>
                    <Image
                            alt="iconservice1"
                            src={"/iconservice5.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Treinamento e Capacitação</h2>
                        <p>Oferecemos treinamentos para equipes internas sobre o uso do sistema SAP e suas funcionalidades.</p>
                    </div>
                    <div className={styles.cardservices}>
                    <Image
                            alt="iconservice1"
                            src={"/iconservice6.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Serviço de Advisory</h2>
                        <p>Suporte especializado que ajuda as empresas a maximizar o valor das soluções SAP que utilizam, garantindo que essas tecnologias estejam alinhadas aos objetivos de negócios da organização.</p>
                    </div>
                </div>

                <div className={styles.cta}>
                    <h1 className={styles.ctatitle}>O que você está esperando <span>para sua tranformação?</span></h1>
                    <div>
                        <p>Descubra como a Cloud IT Solutions pode transformar seu negócio—entre em contato e dê o primeiro passo rumo à inovação!</p>
                        <div className={styles.ctabtn}>
                        <a href="">Entrar em contato</a>
                        <a href="">Saber mais</a>
                        </div>
                    </div>
                </div>

            </main >
        </div>
    );
}
