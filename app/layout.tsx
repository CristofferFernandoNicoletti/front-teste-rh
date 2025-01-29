import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HydrationFix } from '@/components/HydrationFix';
import { inter } from '@/lib/fonts';
import './globals.css';

export const metadata = {
  title: 'Front RH',
  description: 'Front RH - Sistema de Recrutamento e Seleção',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body suppressHydrationWarning={true} className="font-sans">
        <HydrationFix />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}