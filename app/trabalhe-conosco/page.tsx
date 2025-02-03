'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import { ChevronDown, Upload } from 'lucide-react';

export default function TrabalhePage() {
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Memoizando a função de validação de arquivo
  const validateFile = useMemo(() => {
    return (file: File): { isValid: boolean; error?: string } => {
      if (!(file.type === 'application/pdf' || file.type.includes('word'))) {
        return { isValid: false, error: 'Por favor, selecione um arquivo PDF ou Word' };
      }
      if (file.size > 5 * 1024 * 1024) {
        return { isValid: false, error: 'O arquivo deve ter no máximo 5MB' };
      }
      return { isValid: true };
    };
  }, []);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validation = validateFile(file);
    if (!validation.isValid) {
      alert(validation.error);
      event.target.value = '';
      return;
    }

    setIsProcessing(true);
    // Simulando o upload do arquivo
    setTimeout(() => {
      setIsProcessing(false);
      alert('Arquivo enviado com sucesso!');
      event.target.value = '';
    }, 2000);
  }, [validateFile]);

  const handleButtonClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  return (
    <main className="pt-32 pb-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Trabalhe Conosco</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Junte-se à Nossa Equipe</h2>
            <p className="text-gray-600 mb-6">
              Na Agex, acreditamos que nossos colaboradores são a chave do nosso sucesso. 
              Estamos sempre em busca de talentos que compartilhem nossa paixão por excelência 
              e inovação no setor de logística.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Por que trabalhar na Agex?</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Ambiente dinâmico e colaborativo</li>
              <li>Oportunidades de crescimento profissional</li>
              <li>Benefícios competitivos</li>
              <li>Programas de desenvolvimento</li>
              <li>Cultura de inovação</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Como se candidatar</h3>
              <p className="text-gray-600 mb-4">
                Envie seu currículo através do formulário ao lado. Nossa equipe de RH 
                analisará seu perfil e entrará em contato caso haja uma vaga compatível 
                com suas qualificações.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <ChevronDown className="w-4 h-4 mr-1" />
                <span>Formatos aceitos: PDF e Word (máx. 5MB)</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Envie seu Currículo</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                  Área de interesse
                </label>
                <select
                  id="area"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Selecione uma área</option>
                  <option value="operacional">Operacional</option>
                  <option value="administrativo">Administrativo</option>
                  <option value="comercial">Comercial</option>
                  <option value="ti">Tecnologia da Informação</option>
                  <option value="rh">Recursos Humanos</option>
                </select>
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Currículo
                </span>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <button
                  onClick={handleButtonClick}
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  {isProcessing ? 'Processando...' : 'Anexar arquivo'}
                </button>
                <p className="mt-1 text-sm text-gray-500">
                  PDF ou Word, máximo 5MB
                </p>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={isPrivacyAccepted}
                  onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  Li e aceito a{' '}
                  <a href="/politica-de-privacidade" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>
                </label>
              </div>

              <button
                disabled={!isPrivacyAccepted || isProcessing}
                className="w-full bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Enviar currículo
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}