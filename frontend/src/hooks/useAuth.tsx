// app/login/page.tsx

"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useAuth from 'src/hooks/useAuth';

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const { loginMutation, error, resetError } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      router.push('/'); // Redirect if already logged in
    }
  }, [router]);

  const onSubmit = async (data: { email: string; password: string }) => {
    resetError();
    loginMutation.mutate({
      username: data.email,
      password: data.password,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md p-8 space-y-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm">Email</label>
              <Input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm">Password</label>
              <Input
                type="password"
                {...register('password', { required: 'Password is required' })}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm">Don't have an account? Sign up</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
