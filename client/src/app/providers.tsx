'use client';
import { store_0001 } from "@/store";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};


export function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store_0001}>
        {children}
      </Provider>
    </QueryClientProvider>
  );
}