import Image from 'next/image';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Banner } from '@/components/Banner';

export default function Home() {
  const cities = [
    'CURITIBA',
    'SÃO PAULO',
    'RIO DE JANEIRO',
    'BELO HORIZONTE',
  ];

  return (
    <main>
      <Banner />
      <div className="flex flex-col min-h-screen">
        {/* Job Listings */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city) => (
                <div key={city} className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0">
                    <Image
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                      alt="Background"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B12] to-[#FF4B12]/90" />
                  </div>
                  <div className="relative p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">
                      CONFERENTE DE
                      <br />
                      CARGA
                      <br />
                      EM
                      <br />
                      {city}
                    </h3>
                    <Link
                      href={`/vaga/${city.toLowerCase()}`}
                      className="inline-block bg-white text-[#FF4B12] px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
                    >
                      VER DETALHES
                    </Link>
                  </div>
                </div>
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
      </div>
    </main>
  );
}