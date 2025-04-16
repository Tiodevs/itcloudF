'use client'

import styles from "./page.module.scss";
import { Header } from "../components/header";
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
                        Cloud IT Solutions: Your Partner in Digital Transformation
                    </h1>

                    <p>
                        Cloud IT Solutions is an Information Technology solutions provider specializing in SAP consulting and services related to digital transformation.
                    </p>

                    <div>
                        <a href="#service" className={styles.btnheade}>Learn more</a>
                        <a href="/contact">Contact us</a>
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
                        <h2>SAP System Deployment</h2>
                        <p>Implementation of SAP modules (SAP ERP, SAP S/4HANA, S/4HANA Cloud Public Edition, and S/4HANA Cloud Private Edition) tailored to each client's specific needs.</p>
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
                        <h2>Consulting in Process Improvement</h2>
                        <p>Assessment and redesign of business processes aimed at increasing efficiency and reducing costs for our clients.</p>
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
                        <h2>Cloud Migration Services </h2>
                        <p>Support in migrating SAP systems to cloud solutions such as SAP S/4HANA Cloud, aiming to provide greater flexibility and scalability for our clients.</p>
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
                        <h2>License Optimization</h2>
                        <p>Consulting on the efficient use of SAP licenses and the selection of solutions that best meet the company's needs.</p>
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
                        <h2>Training and Enablement</h2>
                        <p>We offer training for internal teams on how to use the SAP system and its functionalities.</p>
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
                    <h1 className={styles.ctatitle}>What are you waiting for <span>your transformation?</span></h1>
                    <div>
                        <p>Discover how Cloud IT Solutions can transform your business—get in touch and take the first step towards innovation!</p>
                        <div className={styles.ctabtn}>
                            <a href="/contact" className={styles.btnctamain}>Contact us</a>
                            <a href="#sobre">Learn more</a>
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
                        <h2>About us</h2>
                        <p>At Cloud IT Solutions, we are driven by a passion for technology and the mission to transform businesses through innovation. We believe that smart solutions are the key to sustainable growth and success in an increasingly digital world. <br /><br /> We are a provider specialized in Information Technology solutions, with a focus on SAP consulting and services aimed at digital transformation. With a highly skilled and continuously updated team, we offer complete support — from business analysis to implementation and ongoing monitoring — ensuring that our clients stay ahead in the competitive landscape. <br /><br /> We work side by side with our partners to understand their challenges, optimize processes, and develop tailored solutions that create real impact. At Cloud IT Solutions, we don’t just deliver technology: we deliver value, strategy, and innovation customized for each business.</p>
                    </div>
                </div>

                <div className={styles.empresas}>
                    <h2>Companies that trusted us</h2>
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

                        <h2>Our Founders</h2>
                        <p>Leadership that Inspires Innovation</p>

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
                        With a solid track record in the technology field and over 12 years of experience in high-complexity SAP projects, Christopher Magalhães is the founder and strategic leader of the company. From the beginning of his career, he has always been at the forefront of the digital transformation of companies across various sectors, acting as a bridge between operational challenges and the smart solutions technology can offer.
                            <br /><br />

                            His mission as CEO goes beyond delivering results — he seeks to build long-lasting partnerships with clients, offering solutions that truly add value to their business. His leadership style is based on active listening, agility, and the creation of collaborative environments where innovation and efficiency go hand in hand.
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
                        Ananda Lemos brings a rare combination of analytical vision and human sensitivity to the company's financial leadership. With a career marked by excellence in strategic planning, cost management, and the development of sustainable processes, she is responsible for ensuring the financial health and intelligent growth of the organization.
                            <br /> <br />
                            Graduated in Economics with specializations in Corporate Finance and Governance, Ananda works in a cross-functional manner, connecting numbers to the company's overall strategy. She believes that finance should not only be a performance indicator but also a driver of innovation and conscious decision-making.
                        </p>

                    </div>
                </div>

                <div className={styles.cta2}>
                    <h1 className={styles.ctatitle}>Are you ready for the <span>next step?</span></h1>
                    <div>
                        <p>Discover how Cloud IT Solutions can transform your business—get in touch and take the first step towards innovation!</p>
                        <div className={styles.ctabtn}>
                            <a href="/contact" className={styles.btnctamain}>Start now</a>
                        </div>
                    </div>
                </div>


                <footer className={styles.footer}>
                    <div className={styles.footercontent}>
                        <h3>Contact</h3>
                        <p>We are ready to help your business reach new heights! Contact Cloud IT Solutions today and learn how our tailored solutions can meet your needs. Your journey towards innovation starts here!
                        </p>
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



            </main >
        </div>
    );
}
