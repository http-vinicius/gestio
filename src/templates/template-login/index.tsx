'use client';

import Image from 'next/image';

import branding from '../../../public/background-logo.jpg';
import logoLogin from '../../../public/logo.svg';

import styles from './page.module.css';

type TemplateLoginProps = {
  children: React.ReactNode;
};

export default function TemplateLogin({ children }: TemplateLoginProps) {
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <Image src={branding} alt="Background" className={styles.image} />
        <div className={styles.brandingLogo}>
          <div className={styles.titleLogin}>
            <Image
              src={logoLogin}
              alt="Logo Gestio"
              width={65}
              height={65}
              priority
            />
            GEST<span className={styles.io}>.IO</span>
          </div>
          <div className={styles.description}>
            Organize seu tempo,
            <span className={styles.maximize}>maximize</span> resultados.
          </div>
        </div>
      </div>
      <div className={styles.login}>
        <div className={styles.containerLogin}>{children}</div>
      </div>
    </section>
  );
}
