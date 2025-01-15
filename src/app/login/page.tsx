'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
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

import { LoginFormValues, validationSchema } from './validate';

import Typography from '@/components/typography';
import Link from 'next/link';
import styles from './page.module.css';

export default function Login() {
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
    <>
      <div className="pb-5">
        <Typography variant="subtitle1">Acesse sua conta</Typography>
      </div>
      <div className="pb-10">
        <Typography className="white">
          Não possui uma conta?
          <a href="/">
            <span className="underline decoration-secondary text-secondary">
              Sign up
            </span>
          </a>
        </Typography>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="pb-3">
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem className="pb-10">
                <FormLabel className="font-bold">Senha</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className={styles.botaoLogin}>
            <Link href="/dashboard">Entrar</Link>
          </Button>
          <FormDescription className="text-center">
            Esqueceu a senha?
          </FormDescription>
        </form>
      </Form>
    </>
  );
}
