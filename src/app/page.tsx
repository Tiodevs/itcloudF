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
            </main >
        </div>
    );
}
