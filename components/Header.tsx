'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

// Carregamento dinâmico do menu mobile
const MobileMenu = lazy(() => import('./mobile-menu'));

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Otimizar o listener de scroll com throttle
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    
    const handleScroll = () => {
      if (timeoutId) return;
      
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 0);
        timeoutId = undefined;
      }, 100);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, [isHome]);

  // Fecha o menu mobile quando mudar de página
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const shouldBeTransparent = isHome && !isScrolled;

  return (
    <div>
      <header className={`px-[24px] fixed top-0 left-0 w-full z-50 transition-all duration-300 ${shouldBeTransparent ? 'bg-transparent' : 'bg-white shadow-md'}`}>
        <div className="max-w-[1400px] w-full my-0 mx-auto">
          <div className="min-h-[72px] flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-[121px] h-[28px] relative">
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="Agex"
                    width={121}
                    height={28}
                    priority
                    className="w-full h-full object-contain"
                  />
                </Link>
              </div>
              
              <nav className="hidden lg:flex items-center">
                <div className="py-[15px] px-[16px] mr-1 hover:bg-black/10 h-10 flex items-center rounded-[14px]">
                  <div className="relative">
                    <button 
                      className="relative text-left ring-0 border-none bg-transparent"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <div className="flex items-baseline gap-2 cursor-pointer transition-all">
                        <p className={`text-black font-inter font-semibold items-center gap-2 border-none flex min-h-10 justify-center ${shouldBeTransparent ? 'text-white' : ''}`}>
                          Empresa
                        </p>
                        <ChevronDown className={`text-black w-3 h-3 ${shouldBeTransparent ? 'text-white' : ''}`} />
                      </div>
                    </button>
                    <div className={`max-h-0 opacity-0 absolute top-[60px] left-50 w-52 p-2 bg-white shadow-lg z-6 rounded-xl overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : ''}`}>
                      <div className="flex flex-col justify-center">
                        <Link href="https://site-agex.vercel.app/quem-somos">
                          <div className="py-1.5 hover:bg-black/10 h-10 items-center rounded-[8px] flex px-4 text-blue-350 text-base leading-6 font-medium transition-colors duration-150">
                            Quem somos
                          </div>
                        </Link>
                        <a href="https://www.agex.com.br/trabalhe" target="_blank" rel="noopener noreferrer">
                          <div className="py-1.5 hover:bg-black/10 h-10 items-center rounded-[8px] px-4 text-blue-350 text-base leading-6 font-medium transition-colors duration-150 flex gap-1">
                            Trabalhe conosco
                          </div>
                        </a>
                        <Link href="https://site-agex.vercel.app/qualidade">
                          <div className="py-1.5 hover:bg-black/10 h-10 items-center rounded-[8px] px-4 text-blue-350 text-base leading-6 font-medium transition-colors duration-150 flex gap-1">
                            Qualidade
                          </div>
                        </Link>
                        <Link href="https://site-agex.vercel.app/solucoes">
                          <div className="py-1.5 hover:bg-black/10 h-10 items-center rounded-[8px] px-4 text-blue-350 text-base leading-6 font-medium transition-colors duration-150 flex gap-1">
                            Soluções
                          </div>
                        </Link>
                        <Link href="/atendimento">
                          <div className="py-1.5 hover:bg-black/10 h-10 items-center rounded-[8px] px-4 text-blue-350 text-base leading-6 font-medium transition-colors duration-150 flex gap-1">
                            Ouvidoria
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/seja-cliente" className={`text-black hover:bg-black/10 mx-1 h-10 items-center rounded-[14px] font-inter font-semibold flex py-[15px] px-[16px] min-h-10 justify-center relative bg-black/10 ${shouldBeTransparent ? 'text-white' : ''}`}>
                  Seja cliente
                </Link>
                <Link href="/atendimento" className={`text-black font-inter hover:bg-black/10 mx-1 h-10 flex items-center rounded-[14px] font-semibold py-[15px] px-[16px] min-h-10 justify-center relative ${shouldBeTransparent ? 'text-white' : ''}`}>
                  Fale conosco
                </Link>
                <Link href="/blog" className={`text-black font-inter font-semibold flex py-[15px] px-[16px] min-h-10 hover:bg-black/10 mx-1 h-10 items-center rounded-[14px] justify-center relative ${shouldBeTransparent ? 'text-white' : ''}`}>
                  Blog
                </Link>
              </nav>
            </div>

            <div className="hidden lg:block">
              <a href="https://cliente.agex.com.br/login" target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  aria-label="Botão"
                  className="bg-[#E64100] hover:bg-[#CC3A00] py-[15px] px-[16px] gap-2 py-4 px-[20px] w-full h-10 rounded-[14px] gap-2 font-semibold text-base flex font-inter justify-center items-center cursor-pointer"
                >
                  <span className="text-white font-inter">Criar conta / Login</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M12 2.5L12.324 2.505C14.9467 2.59002 17.4309 3.70254 19.2408 5.60261C21.0507 7.50268 22.0412 10.038 21.9987 12.6618C21.9562 15.2855 20.884 17.7874 19.0136 19.6279C17.1431 21.4683 14.6241 22.4998 12 22.4998C9.3759 22.4998 6.85694 21.4683 4.98645 19.6279C3.11596 17.7874 2.04383 15.2855 2.00131 12.6618C1.9588 10.038 2.9493 7.50268 4.75918 5.60261C6.56906 3.70254 9.05328 2.59002 11.676 2.505L12 2.5ZM12.613 7.71C12.412 7.55459 12.1594 7.48151 11.9065 7.5056C11.6536 7.52969 11.4193 7.64916 11.2513 7.83972C11.0832 8.03029 10.994 8.27767 11.0018 8.53162C11.0095 8.78557 11.1137 9.02704 11.293 9.207L13.584 11.5H8L7.883 11.507C7.62991 11.5371 7.39786 11.6627 7.23427 11.8582C7.07068 12.0536 6.98789 12.3042 7.00283 12.5586C7.01777 12.813 7.1293 13.0522 7.31463 13.2272C7.49997 13.4021 7.74512 13.4997 8 13.5H13.584L11.293 15.793L11.21 15.887C11.0546 16.088 10.9815 16.3406 11.0056 16.5935C11.0297 16.8464 11.1492 17.0807 11.3397 17.2488C11.5303 17.4168 11.7777 17.506 12.0316 17.4982C12.2856 17.4905 12.527 17.3863 12.707 17.207L16.707 13.207L16.78 13.125L16.844 13.036L16.906 12.923L16.95 12.813L16.98 12.701L16.997 12.575L17 12.5L16.993 12.382L16.964 12.234L16.929 12.129L16.875 12.016L16.804 11.905C16.7745 11.8653 16.742 11.8279 16.707 11.793L12.707 7.793L12.613 7.71Z" fill="white"/>
                  </svg>
                </button>
              </a>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary bg-transparent rounded-full p-2" 
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#FF4B12]" />
              ) : (
                <Menu className={`w-6 h-6 ${shouldBeTransparent ? 'text-white' : ''}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile com carregamento dinâmico */}
      {isMobileMenuOpen && (
        <Suspense fallback={
          <div className="lg:hidden fixed inset-0 bg-white z-40 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#E64100]"></div>
          </div>
        }>
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}