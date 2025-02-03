'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#ECEAE6] px-[24px]">
      <div className="pt-[80px] pb-[40px] max-w-[1400px] w-full my-0 mx-auto">
        <div className="flex gap-6 justify-between flex-wrap items-start">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Agex"
              width={121}
              height={28}
              loading="lazy"
            />
          </Link>
          <div className="flex items-start content-start gap-6 flex-wrap">
            <div className="flex flex-col gap-4 w-[200px]">
              <h3 className="font-inter text-sm font-bold text-[#665E54]">CONTATO</h3>
              <ul className="flex list-none flex-col items-start gap-3 self-stretch">
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/atendimento">Atendimento</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <a target="_blank" rel="noopener noreferrer" href="https://cliente.agex.com.br/cotacao">Cotação</a>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/seja-cliente">Seja cliente</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/agregar-veiculo">Agregue seu veículo</Link>
                </li>
                <li>
                  <Link href="/seja-um-agente-local">
                    <p className="font-inter text-sm hover:text-primary font-medium text-[#1D1D1D]">Seja um agenciador</p>
                  </Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.agex.com.br/trabalhe">Trabalhe conosco</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-[200px]">
              <h3 className="font-inter text-sm font-bold text-[#665E54]">AGEX</h3>
              <ul className="flex flex-col list-none items-start gap-3 self-stretch">
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/quem-somos">Quem somos</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/qualidade">Qualidade</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/solucoes">Soluções</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/politica-de-privacidade">Privacidade</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/perfil-de-carga">Perfil de carga</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-[200px]">
              <h3 className="font-inter text-sm font-bold text-[#665E54]">CONTA</h3>
              <ul className="flex list-none flex-col items-start gap-3 self-stretch">
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <a target="_blank" rel="noopener noreferrer" href="https://cliente.agex.com.br/login">Criar conta / Login</a>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <a target="_blank" rel="noopener noreferrer" href="https://cliente.agex.com.br/rastrear">Rastrear envios</a>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <a target="_blank" rel="noopener noreferrer" href="https://cliente.agex.com.br/cotacao">Cotar frete</a>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <a target="_blank" rel="noopener noreferrer" href="https://cliente.agex.com.br/coleta">Agendar coleta</a>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <a target="_blank" rel="noopener noreferrer" href="https://cliente.agex.com.br/prazos">Prazos de entrega</a>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <a target="_blank" rel="noopener noreferrer" href="https://cliente.agex.com.br/faturas">Faturas</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-[200px]">
              <h3 className="font-inter text-sm font-bold text-[#665E54]">BLOG</h3>
              <ul className="flex list-none flex-col items-start gap-3 self-stretch">
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/blog">Notícias</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/blog">Transporte</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/blog">Ecommerce</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/blog">Dicas</Link>
                </li>
                <li className="font-inter text-sm text-[#1D1D1D] font-medium hover:text-primary">
                  <Link href="/blog">A Agex</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-6">
            <div className="flex gap-6 items-start">
              <a aria-label="Instagram" href="https://www.instagram.com/transportadoraagex/">
                <div className="bg-primary w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                  <Instagram className="text-white" size={26} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] w-full my-0 mx-auto">
        <div className="flex justify-between flex-wrap py-[40px] items-start gap-8 self-stretch">
          <div className="flex flex-wrap flex-col md:flex-row items-start gap-8 md:gap-14">
            <div>
              <p className="font-inter text-sm font-medium text-[#665E54]"> 2025 Agex Transportes LTDA</p>
            </div>
            <div className="flex justify-center md:flex-row flex-col flex-wrap items-start md:gap-8 gap-4">
              <Link href="/seja-cliente">
                <p className="font-inter text-sm hover:text-primary font-medium text-[#1D1D1D]">Seja Cliente</p>
              </Link>
              <Link href="/agregar-veiculo">
                <p className="font-inter text-sm hover:text-primary font-medium text-[#1D1D1D]">Agregue seu veículo</p>
              </Link>
              <a target="_blank" rel="noopener noreferrer" href="https://www.agex.com.br/trabalhe">
                <p className="font-inter text-sm hover:text-primary font-medium text-[#1D1D1D]">Trabalhe conosco</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}