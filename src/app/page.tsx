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
                        <a href="#service" className={styles.btnheade}>Saiba mais</a>
                        <a href="/contact">Entre em contato</a>
                    </div>

                </div>

                <div id="service" className={styles.services}>
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
                            <a href="/contact" className={styles.btnctamain}>Entrar em contato</a>
                            <a href="#sobre">Saber mais</a>
                        </div>
                    </div>
                </div>

                <div id="sobre" className={styles.sobre}>
                    <Image
                        alt="Logo Sujeito Pizza"
                        src={"/capasobrenos.png"}
                        width={652}
                        height={551}
                        priority={true}
                        quality={100}
                    />
                    <div className={styles.sobretext}>
                        <h2>Sobre Nós</h2>
                        <p>Na Cloud IT Solutions, somos movidos pela paixão por tecnologia e pela missão de transformar empresas através da inovação. Acreditamos que soluções inteligentes são a chave para o crescimento sustentável e o sucesso em um mundo cada vez mais digital.
                            <br /><br />
                            Somos uma provedora especializada em soluções de Tecnologia da Informação, com foco em consultoria SAP e serviços voltados à transformação digital. Com uma equipe altamente qualificada e em constante atualização, oferecemos suporte completo — desde a análise de negócios até a implementação e o acompanhamento contínuo — garantindo que nossos clientes estejam sempre à frente no cenário competitivo.
                            <br /><br />
                            Trabalhamos lado a lado com nossos parceiros para entender seus desafios, otimizar processos e desenvolver soluções personalizadas que gerem impacto real. Na Cloud IT Solutions, não entregamos apenas tecnologia: entregamos valor, estratégia e inovação sob medida para cada negócio.</p>
                    </div>
                </div>

                <div className={styles.empresas}>
                    <h2>Empresas que confiaram em nós</h2>
                    <div className={styles.empresaslogos}>
                        <Image
                            alt="Logo Sujeito Pizza"
                            src={"/logoempresas1.png"}
                            width={225}
                            height={225}
                            priority={true}
                            quality={100}
                        />
                        <Image
                            alt="Logo Sujeito Pizza"
                            src={"/logoempresas2.png"}
                            width={192}
                            height={143}
                            priority={true}
                            quality={100}
                        />
                        <Image
                            alt="Logo Sujeito Pizza"
                            src={"/logoempresas3.png"}
                            width={317}
                            height={154}
                            priority={true}
                            quality={100}
                        />
                        <Image
                            alt="Logo Sujeito Pizza"
                            src={"/logoempresas4.png"}
                            width={165}
                            height={134}
                            priority={true}
                            quality={100}
                        />
                        <Image
                            alt="Logo Sujeito Pizza"
                            src={"/logoempresas5.png"}
                            width={213}
                            height={104}
                            priority={true}
                            quality={100}
                        />
                    </div>
                </div>


                <div className={styles.fundadores}>
                    <div className={styles.fundadorestext}>

                        <h2>Nossos Fundadores</h2>
                        <p>Liderança que inspira inovação</p>

                    </div>

                    <div className={styles.fundadorescard}>
                        <div className={styles.person}>

                            <Image
                                alt="Logo Sujeito Pizza"
                                src={"/fundador1.png"}
                                width={226}
                                height={226}
                                priority={true}
                                quality={100}
                            />

                            <h3>
                                Christopher Magalhães
                            </h3>

                            <p>
                                CEO
                            </p>

                        </div>

                        <p className={styles.fundadoresdescricao}>
                            Com uma trajetória sólida no universo da tecnologia e mais de 12 anos de atuação em projetos SAP de alta complexidade, Christopher Magalhães é o fundador e líder estratégico da empresa. Desde o início de sua carreira, sempre esteve à frente da transformação digital de empresas de diferentes segmentos, atuando como uma ponte entre os desafios operacionais e as soluções inteligentes que a tecnologia pode oferecer.
                            <br /><br />

                            Sua missão como CEO vai além de entregar resultados — ele busca construir parcerias duradouras com seus clientes, propondo soluções que realmente agregam valor ao negócio. Seu estilo de liderança é pautado na escuta ativa, na agilidade e na criação de ambientes colaborativos, onde inovação e eficiência caminham lado a lado.
                        </p>

                    </div>

                    <div className={styles.fundadorescard}>
                        <div className={styles.person}>

                            <Image
                                alt="Logo Sujeito Pizza"
                                src={"/fundador2.png"}
                                width={226}
                                height={226}
                                priority={true}
                                quality={100}
                            />

                            <h3>
                                Ananda Lemos
                            </h3>

                            <p>
                                CFO
                            </p>

                        </div>

                        <p className={styles.fundadoresdescricao}>
                            Ananda Lemos traz uma combinação rara de visão analítica e sensibilidade humana para o comando financeiro da empresa. Com uma carreira marcada pela excelência em planejamento estratégico, gestão de custos e construção de processos sustentáveis, ela é responsável por garantir a saúde financeira e o crescimento inteligente da organização.
                            <br /> <br />
                            Formada em Economia com especializações em Finanças Corporativas e Governança, Ananda atua de forma transversal, conectando os números à estratégia geral da empresa. Ela acredita que as finanças não devem ser apenas um indicador de desempenho, mas sim um motor de inovação e tomada de decisão consciente.
                        </p>

                    </div>
                </div>

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

            </main >
        </div>
    );
}
