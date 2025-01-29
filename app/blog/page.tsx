export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Blog AGEX</h1>
          
          <div className="grid gap-8">
            <article className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Inovações no setor de transportes para 2024
              </h2>
              <p className="text-gray-600 mb-4">
                Descubra as principais tendências e inovações que estão transformando o setor de
                transportes e logística neste ano.
              </p>
              <a href="#" className="text-[#FF4B12] hover:text-[#E63A00]">
                Ler mais →
              </a>
            </article>

            <article className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Sustentabilidade na logística: nosso compromisso com o futuro
              </h2>
              <p className="text-gray-600 mb-4">
                Conheça as iniciativas da AGEX para reduzir o impacto ambiental e promover uma
                logística mais sustentável.
              </p>
              <a href="#" className="text-[#FF4B12] hover:text-[#E63A00]">
                Ler mais →
              </a>
            </article>

            <article className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                Como otimizar sua operação logística
              </h2>
              <p className="text-gray-600 mb-4">
                Dicas práticas para melhorar a eficiência da sua operação logística e reduzir
                custos operacionais.
              </p>
              <a href="#" className="text-[#FF4B12] hover:text-[#E63A00]">
                Ler mais →
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}