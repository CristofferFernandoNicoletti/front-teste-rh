export default function EmpresaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">Sobre a AGEX</h1>
          
          <div className="prose max-w-none">
            <p className="mb-6">
              A AGEX é uma empresa líder no setor de transportes e logística, com anos de experiência
              em soluções de entrega eficientes e confiáveis. Nossa missão é conectar pessoas e
              negócios através de um serviço de transporte de excelência.
            </p>

            <h2 className="text-xl font-semibold mb-4">Nossa História</h2>
            <p className="mb-6">
              Fundada com o compromisso de oferecer soluções logísticas inovadoras, a AGEX cresceu
              e se desenvolveu mantendo sempre o foco na qualidade do serviço e na satisfação do
              cliente.
            </p>

            <h2 className="text-xl font-semibold mb-4">Nossos Valores</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Comprometimento com a excelência</li>
              <li>Inovação em processos e tecnologia</li>
              <li>Responsabilidade social e ambiental</li>
              <li>Valorização dos colaboradores</li>
              <li>Foco na satisfação do cliente</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">Infraestrutura</h2>
            <p className="mb-6">
              Contamos com uma moderna frota de veículos, centros de distribuição estrategicamente
              localizados e uma equipe altamente capacitada para garantir a melhor experiência em
              transporte e logística.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}