import React, { ReactNode } from 'react';
import styles from './CardAtivo.module.css'; // Importando CSS Modules

interface CardAtivoProps {
  titulo: string;
  children: ReactNode; // Permite que qualquer tipo de conteúdo seja passado
}

export const CardAtivo: React.FC<CardAtivoProps> = ({ titulo, children }) => {
  return (
    <div className={styles.card}>
      <h2>{titulo}</h2>
      {children}
    </div>
  );
};