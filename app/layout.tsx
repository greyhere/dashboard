import '#/styles/globals.css';

export const metadata = {
  title: 'Dashboard App',
  description: 'Dashboard App',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body>{children}</body>
  </html>
);

export default RootLayout;
