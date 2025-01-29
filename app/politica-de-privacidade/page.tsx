'use client';

import { Metadata } from 'next';

export default function PoliticaPrivacidadePage() {
  return (
    <main className="pt-32 pb-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="mb-4">
              A Agex está comprometida em proteger a sua privacidade. Esta Política de Privacidade descreve como coletamos, 
              usamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Coleta de Informações</h2>
            <p className="mb-4">
              Coletamos informações que você nos fornece diretamente, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Currículo e informações profissionais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Uso das Informações</h2>
            <p className="mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Processar suas candidaturas a vagas</li>
              <li>Comunicar-nos com você sobre oportunidades de emprego</li>
              <li>Melhorar nossos serviços</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Proteção de Dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger 
              suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos</h2>
            <p className="mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contato</h2>
            <p className="mb-4">
              Para questões sobre esta política ou sobre seus dados pessoais, entre em contato conosco através 
              do e-mail: privacidade@agex.com.br
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
