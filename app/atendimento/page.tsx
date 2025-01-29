'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function AtendimentoPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log({ nome, email, assunto, mensagem });
  };

  return (
    <main className="pt-32 pb-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Fale Conosco</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de Contato */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Envie sua mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E64100] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E64100] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E64100] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E64100] focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E64100] text-white py-3 px-4 rounded-[14px] font-semibold hover:bg-[#CC3A00] transition-colors duration-200"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E64100] mt-1" />
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-gray-600">0800 000 0000</p>
                    <p className="text-gray-600">Segunda a Sexta, das 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#E64100] mt-1" />
                  <div>
                    <h3 className="font-medium">E-mail</h3>
                    <p className="text-gray-600">atendimento@agex.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E64100] mt-1" />
                  <div>
                    <h3 className="font-medium">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Exemplo, 123 - Bairro<br />
                      Cidade - Estado, 00000-000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Horário de Atendimento</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Segunda a Sexta:</span> 8h às 18h
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Sábado:</span> 8h às 12h
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Domingo e Feriados:</span> Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
