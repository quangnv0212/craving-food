'use client';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LoginBody, LoginBodyType } from '../schemaValidations/auth.schema';
export default function LoginForm() {
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: LoginBodyType) => {
    console.log(data);
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          noValidate
          onSubmit={form.handleSubmit(onSubmit, err => {
            console.log(err);
          })}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className="w-full"
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...field}
                  />
                  <FormMessage>{errors.email?.message as string}</FormMessage>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    className="w-full"
                    id="password"
                    type="password"
                    required
                    {...field}
                  />
                  <FormMessage>
                    {errors.password?.message as string}
                  </FormMessage>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" className="btn btn-primary w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
