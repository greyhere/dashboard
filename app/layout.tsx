import '#/styles/globals.css';

import { Appbar, Container, Sidebar } from '#/components';

export const metadata = {
  title: 'Dashboard App',
  description: 'Dashboard App',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className='lg:flex'>
      <Sidebar className='w-1/5 min-h-screen self-baseline sticky top-0' />
      <div className='bg-slate-400 w-full'>
        <Appbar className='bg-orange-400' />
        <Container className='h-[200vh]'>{children}</Container>
      </div>
    </body>
  </html>
);

export default RootLayout;
