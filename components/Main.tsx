import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main className="flex-grow max-w-7xl w-full mx-auto grid p-6 gap-6 sm:grid-cols-2">
    {children}
  </main>
);
