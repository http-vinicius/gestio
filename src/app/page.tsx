'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

import logoLogin from '../../public/logo.svg';

import { LoginFormValues, validationSchema } from './validate';

import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
      senha: '',
    },
  });

  const handleLogin = useCallback((values: LoginFormValues) => {
    // console.log(values);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.login}>
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle className={styles.titleLogin}>
              <Image
                src={logoLogin}
                alt="Logo Gestio"
                width={85}
                height={85}
                priority
              />
              GEST.IO
            </CardTitle>
            <CardDescription className={styles.description}>
              Organize seu tempo, maximize resultados.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)}>
              <CardContent className={styles.content}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem className="pb-3">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage>{fieldState.error?.message}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="senha"
                  render={({ field }) => (
                    <FormItem className="pb-3">
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className={styles.footerLogin}>
                <Button type="submit" className={styles.botaoLogin}>
                  <Link href="/dashboard">ENTRAR</Link>
                </Button>
                <FormDescription>Esqueceu a senha?</FormDescription>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
