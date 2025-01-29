'use client';

import { useState } from 'react';
import Link from 'next/link';

export function PreCadastroForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    pretensaoSalarial: '',
    cidade: '',
    mensagem: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [aceitaPolitica, setAceitaPolitica] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aceitaPolitica) {
      alert('Você precisa aceitar as políticas de privacidade para continuar.');
      return;
    }
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({ ...formData, curriculo: selectedFile, aceitaPolitica });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Verificar o tipo do arquivo
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Por favor, selecione um arquivo PDF, DOC ou DOCX');
        return;
      }

      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    // Limpar o input file
    const fileInput = document.getElementById('curriculo') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-medium mb-6">Pré cadastro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nome completo"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          required
        />

        <input
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          required
        />

        <input
          type="tel"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          required
        />

        <input
          type="text"
          placeholder="CPF"
          value={formData.cpf}
          onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          required
        />

        <input
          type="text"
          placeholder="Pretensão salarial"
          value={formData.pretensaoSalarial}
          onChange={(e) => setFormData({ ...formData, pretensaoSalarial: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          required
        />

        <input
          type="text"
          placeholder="Cidade"
          value={formData.cidade}
          onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
          required
        />

        <textarea
          placeholder="Mensagem"
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
        />

        <div className="space-y-2">
          {!selectedFile ? (
            <button
              type="button"
              onClick={() => document.getElementById('curriculo')?.click()}
              className="text-[#FF4B12] font-medium flex items-center gap-2 hover:text-[#ff6e31] transition-colors duration-200"
            >
              Adicionar currículo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          ) : (
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md border border-gray-200">
              <div className="flex items-center gap-2 overflow-hidden">
                <div className="flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF4B12]">
                    <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9M13 2L20 9M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{selectedFile.name}</p>
                  <p className="text-xs text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)}MB
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="flex-shrink-0 ml-4 p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
                title="Remover arquivo"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
          <input
            type="file"
            id="curriculo"
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
        </div>

        <div 
          className="flex items-center space-x-2" 
          id="privacy-policy-form-item" 
          aria-describedby="privacy-policy-form-item-description" 
          aria-invalid="false"
        >
          <button
            type="button"
            role="checkbox"
            aria-checked={aceitaPolitica}
            data-state={aceitaPolitica ? 'checked' : 'unchecked'}
            value="on"
            onClick={() => setAceitaPolitica(!aceitaPolitica)}
            className="peer relative h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-white data-[state=checked]:bg-[#FF4B12] data-[state=checked]:border-[#FF4B12] flex items-center justify-center"
            id="checkbox-privacy-policy"
          >
            {aceitaPolitica && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 2.5L3.5 7.5L1 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <input
            aria-hidden="true"
            tabIndex={-1}
            type="checkbox"
            value="on"
            checked={aceitaPolitica}
            onChange={(e) => setAceitaPolitica(e.target.checked)}
            style={{ transform: 'translateX(-100%)', position: 'absolute', pointerEvents: 'none', opacity: 0, margin: 0, width: '16px', height: '16px' }}
          />
          <label htmlFor="checkbox-privacy-policy" className="text-sm font-inter text-[#231E16] font-normal cursor-pointer">
            Eu aceito a{' '}
            <Link 
              href="/politica-de-privacidade" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline text-blue-600"
            >
              política de privacidade
            </Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={!aceitaPolitica}
          className="w-full bg-[#FF4B12] text-white py-3 px-4 rounded-md hover:bg-[#ff6e31] transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#FF4B12]"
        >
          Enviar o currículo
        </button>
      </form>
    </div>
  );
}
