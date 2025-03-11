'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type AppStoreType = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
};

export const useAppStore = create<AppStoreType>()(
  persist(
    set => ({
      isAuth: false,
      setIsAuth: (isAuth: boolean) => {
        set({ isAuth });
      },
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
