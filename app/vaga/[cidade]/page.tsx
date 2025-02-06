import { PreCadastroForm } from '@/components/pre-cadastro-form';

// Esta função é necessária para gerar as páginas estáticas durante o build
export function generateStaticParams() {
  return [
    { cidade: 'maringa' },
    { cidade: 'curitiba' },
    { cidade: 'londrina' },
    { cidade: 'cascavel' }
  ];
}

interface PageProps {
  params: Promise<{ cidade: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const cidadeFormatada = resolvedParams.cidade
    .toLowerCase()
    .replace(/(^|\s)\S/g, (L: string) => L.toUpperCase());

  return {
    title: `Vagas em ${cidadeFormatada}`,
  }
}

export default async function VagaDetalhePage({ params }: PageProps) {
  // Formata o nome da cidade para exibição (primeira letra maiúscula)
  const resolvedParams = await params;
  const cidadeFormatada = resolvedParams.cidade.charAt(0).toUpperCase() + resolvedParams.cidade.slice(1).toLowerCase();

  return (
    <main className="container mx-auto px-4 pt-32 pb-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-[#FF4B12]">Conferente de Cargas</h1>
        <p className="text-gray-600 mb-8">{cidadeFormatada}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lado esquerdo - Descrição da vaga */}
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Descrição das Atividades:</h2>
              <p className="text-gray-700 mb-4">
                Buscamos um profissional responsável por funções essenciais para o bom funcionamento das operações logísticas. Entre as principais responsabilidades estão:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>
                  <strong>Carga e descarga de mercadorias:</strong> Executar a manual de transporte ou com auxílio de equipamentos adequados para garantir a entrega segura dos volumes.
                </li>
                <li>
                  <strong>Conferência de tipo e peso da carga:</strong> Verificar se as especificações das mercadorias estão em conformidade com os registros, garantindo precisão e agilidade no processo.
                </li>
                <li>
                  <strong>Contagem de volumes:</strong> Realize a contagem exata de todos os itens recebidos e expedidos, evitando divergências no estoque.
                </li>
                <li>
                  <strong>Separação de cargas conforme rotas:</strong> Organizar os volumes de acordo com as rotas de entrega da remessa, otimizando a distribuição e facilitando o transporte.
                </li>
                <li>
                  <strong>Cubagem de cargas:</strong> Efetuar o cálculo das dimensões e volumes das mercadorias para melhor aproveitamento do espaço nos veículos e armazenamento.
                </li>
                <li>
                  <strong>Identificação de faltas e acréscimos de volumes:</strong> Registrador de possíveis diferenças entre os detalhes físicos e os documentos de controle, reportando irregularidades.
                </li>
                <li>
                  <strong>Verificação de notas fiscais:</strong> Conferir as notas fiscais na entrada e saída das mercadorias, garantindo a conformidade com os pedidos e as exigências fiscais.
                </li>
                <li>
                  <strong>Manutenção da limpeza e organização do barracão:</strong> Garantir que o ambiente de trabalho esteja limpo, seguro e organizado, promovendo um local adequado para as operações logísticas.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Requisitos:</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Experiência anterior na área logística será considerada um diferencial;</li>
                <li>Conhecimento básico em controle de estoque e documentação fiscal;</li>
                <li>Habilidade para operar equipamentos de movimentação de carga (se aplicável);</li>
                <li>Organização, atenção aos detalhes e trabalho em equipe;</li>
                <li>Disponibilidade para atuar em turnos, conforme a necessidade da operação.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Veja:</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Ambiente de trabalho dinâmico;</li>
                <li>Oportunidades de crescimento profissional;</li>
                <li>Benefícios competitivos com o mercado.</li>
              </ul>
            </div>
          </div>

          {/* Lado direito - Formulário de pré-cadastro */}
          <PreCadastroForm />
        </div>
      </div>
    </main>
  );
}