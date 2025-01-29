export default function FaleConoscoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8">Fale Conosco</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Central de Atendimento</h2>
              <p className="text-gray-600 mb-2">Segunda a Sexta: 8h às 18h</p>
              <p className="text-gray-600">Sábado: 8h às 12h</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Contatos</h2>
              <p className="text-gray-600 mb-2">Telefone: (XX) XXXX-XXXX</p>
              <p className="text-gray-600">Email: contato@agex.com.br</p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome completo
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
                Assunto
              </label>
              <select
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Selecione</option>
                <option value="duvida">Dúvida</option>
                <option value="sugestao">Sugestão</option>
                <option value="reclamacao">Reclamação</option>
                <option value="outros">Outros</option>
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
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF4B12] text-white py-3 rounded-md font-semibold hover:bg-[#E63A00] transition-colors"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}