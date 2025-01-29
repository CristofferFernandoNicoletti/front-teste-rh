export default function SejaClientePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">Seja Cliente AGEX</h1>

          <div className="prose max-w-none mb-8">
            <p className="mb-6">
              Junte-se à AGEX e descubra como podemos ajudar seu negócio com soluções
              logísticas eficientes e personalizadas.
            </p>

            <h2 className="text-xl font-semibold mb-4">Por que escolher a AGEX?</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Cobertura nacional</li>
              <li>Tecnologia de ponta para rastreamento</li>
              <li>Equipe especializada</li>
              <li>Soluções personalizadas</li>
              <li>Preços competitivos</li>
            </ul>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da empresa
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CNPJ
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do responsável
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cidade/Estado
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de serviço de interesse
              </label>
              <select
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Selecione</option>
                <option value="transporte">Transporte de cargas</option>
                <option value="armazenagem">Armazenagem</option>
                <option value="distribuicao">Distribuição</option>
                <option value="ecommerce">E-commerce</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Conte-nos um pouco sobre suas necessidades logísticas..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF4B12] text-white py-3 rounded-md font-semibold hover:bg-[#E63A00] transition-colors"
            >
              Solicitar contato
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}