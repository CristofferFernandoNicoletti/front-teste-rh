import { Suspense } from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Banner } from '@/components/Banner';
import Image from 'next/image';
import { OptimizedImage } from '@/components/OptimizedImage';

const cities = ['CURITIBA', 'SÃO PAULO', 'RIO DE JANEIRO', 'BELO HORIZONTE'] as const;

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="w-full h-[600px] bg-gray-100 animate-pulse" />}>
        <Banner />
      </Suspense>

      <section className="py-16 contain-paint">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link
                key={city}
                href={`/vaga/${city.toLowerCase()}`}
                className="relative overflow-hidden rounded-lg group bg-[#FF4B12] hover:bg-[#E64100] transition-colors duration-300 contain-paint flex flex-col h-full"
              >
                <div className="p-8 text-white flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-8">
                    CONFERENTE DE
                    <br />
                    CARGA
                    <br />
                    EM
                    <br />
                    {city}
                  </h3>
                  <div className="mt-auto flex items-center justify-center">
                    <span className="inline-block bg-white text-[#FF4B12] px-6 py-2 rounded font-medium group-hover:bg-gray-100 transition-colors">
                      VER DETALHES
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/trabalhe-conosco"
              className="inline-flex items-center gap-2 bg-[#FF4B12] text-white px-8 py-4 rounded font-semibold hover:bg-[#E63A00] transition-colors"
            >
              <FileText className="w-5 h-5" />
              CADASTRE SEU CURRÍCULO
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}