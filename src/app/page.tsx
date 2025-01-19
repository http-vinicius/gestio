'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { LoginFormValues, validationSchema } from './validate';

import Typography from '@/components/typography';
import TemplateLogin from '@/templates/template-login';
import 'dotenv/config';
import Link from 'next/link';
import createUser from '../services/CreateUser';
import styles from './page.module.css';

export default function Home() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
      senha: '',
      nome: '',
      sobrenome: '',
    },
  });

  const handleCreateAccount = useCallback(
    async (values: LoginFormValues) => {
      await createUser({
        email: values.email,
        lastname: values.sobrenome,
        name: values.nome,
        password: values.senha,
      });
    },
    [createUser]
  );

  return (
    <TemplateLogin>
      <div className="pb-5">
        <Typography variant="subtitle1">Crie sua conta</Typography>
      </div>
      <div className="pb-12">
        <Typography className="white">
          Já possui uma conta?
          <a href="/login">
            <span className="underline decoration-secondary text-secondary">
              Sign in
            </span>
          </a>
        </Typography>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleCreateAccount)}>
          <div className={styles.nomeSobrenome}>
            <FormField
              control={form.control}
              name="nome"
              render={({ field, fieldState }) => (
                <FormItem className="pb-3 w-[50vh]">
                  <FormLabel className="font-bold">Nome</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sobrenome"
              render={({ field }) => (
                <FormItem className="pb-3 w-[50vh]">
                  <FormLabel className="font-bold">Sobrenome</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
              <FormItem className="pb-3">
                <FormLabel className="font-bold">Senha</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className={styles.botaoLogin}>
            <Link href="/">Criar</Link>
          </Button>
        </form>
      </Form>
    </TemplateLogin>
  );
}
