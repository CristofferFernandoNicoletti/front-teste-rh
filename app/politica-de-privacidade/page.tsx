'use client';

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
              Coletamos informações que você nos fornece diretamente, como:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Endereço</li>
              <li>Informações de pagamento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Uso das Informações</h2>
            <p className="mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Processar seus pedidos</li>
              <li>Enviar atualizações sobre seus envios</li>
              <li>Melhorar nossos serviços</li>
              <li>Comunicar sobre promoções e novidades</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Proteção de Dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado,
              alteração, divulgação ou destruição não autorizada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos</h2>
            <p className="mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acessar seus dados</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Optar por não receber comunicações de marketing</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
