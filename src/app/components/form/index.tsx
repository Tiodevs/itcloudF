"use client";

import { api } from '@/app/services/api';
import styles from './styles.module.scss';
import { InstagramIcon, Linkedin } from "lucide-react";
import { useState } from 'react';

export function Form() {
  // States para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    try {
      const response = await api.post("/lead", {
        nome,
        email,
        numero,
      });

      console.log("response:", response)
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro. Tente novamente.');
    }
  };

  return (
    <div className={styles.mensagem}>
      <div className={styles.formcontent}>
        <div className={styles.infoform}>
          <div className={styles.contntinfo}>
            <h1>Contate-me</h1>
            <div className={styles.infoemail}>
              <p>Mande um email</p>
              <p>Faça agora o seu <span>orçamento</span></p>
            </div>
            <div className={styles.infoicons}>
              <Linkedin size={27} color="#3C5ABE" />
              <InstagramIcon size={27} color="#3C5ABE" />
            </div>
          </div>
          <p className={styles.copy}>© 2024 Sentier</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <p>Nome</p>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <p>Número</p>
            <input
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </div>

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}
