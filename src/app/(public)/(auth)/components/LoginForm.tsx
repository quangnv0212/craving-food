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
    <div className="font-sans">
      <h1 className="font-sans text-2xl font-bold">Login</h1>
      <Form {...form}>
        <form
          className="w-full max-w-[600px] flex-shrink-0 space-y-2 font-sans"
          noValidate
          onSubmit={form.handleSubmit(onSubmit, err => {
            console.log(err);
          })}
        >
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field, formState: { errors } }) => (
                <FormItem>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
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
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required {...field} />
                    <FormMessage>
                      {errors.password?.message as string}
                    </FormMessage>
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
