'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import { ChevronDown, Upload } from 'lucide-react';
import Image from 'next/image';

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

  // Processamento de arquivo otimizado
  const processFile = useCallback(async (file: File) => {
    if (isProcessing) return;

    setIsProcessing(true);
    try {
      const validation = validateFile(file);
      if (validation.isValid) {
        // setSelectedFile(file);
      } else if (validation.error) {
        alert(validation.error);
      }
    } catch (error) {
      console.error('Erro ao processar arquivo:', error);
    } finally {
      setIsProcessing(false);
    }
  }, [isProcessing, validateFile]);

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  }, [processFile]);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  }, [processFile]);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/fundo.jpeg"
            alt="Fundo AGEX"
            priority={false}
            quality={75}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-[138px]">
            <div className="max-w-[500px]">
              <span className="inline-block bg-[#FF4B12] text-white px-4 py-2 rounded-[4px] text-sm font-bold">
                TRABALHE CONOSCO
              </span>
              <h1 className="text-white text-[32px] lg:text-[40px] font-bold leading-[1.2] lg:leading-[48px] mt-6">
                Cadastre seu currículo e faça parte da equipe que move o futuro do transporte!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-[#F9F8F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-[138px]">
          <div className="max-w-[400px] mx-auto">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-4">
                <h2 className="text-[#231E16] text-sm leading-4 font-bold">Informações pessoais</h2>
                <input
                  className="placeholder:text-gray-500 text-black flex h-[56px] w-full rounded-[6px] border px-3 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 border-neutral-300 bg-white"
                  placeholder="Nome completo"
                  type="text"
                  name="nome"
                />
                <input
                  className="placeholder:text-gray-500 text-black flex h-[56px] w-full rounded-[6px] border px-3 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 border-neutral-300 bg-white"
                  placeholder="E-mail"
                  type="email"
                  name="email"
                />
                <input
                  className="placeholder:text-gray-500 text-black flex h-[56px] w-full rounded-[6px] border px-3 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 border-neutral-300 bg-white"
                  placeholder="Celular"
                  type="tel"
                  name="celular"
                />
                <input
                  className="placeholder:text-gray-500 text-black flex h-[56px] w-full rounded-[6px] border px-3 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 border-neutral-300 bg-white"
                  placeholder="CPF"
                  type="text"
                  name="cpf"
                />
                <input
                  className="placeholder:text-gray-500 text-black flex h-[56px] w-full rounded-[6px] border px-3 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 border-neutral-300 bg-white"
                  placeholder="Pretensão salarial"
                  type="text"
                  name="pretensao_salarial"
                />
                <button
                  type="button"
                  className="flex text-start w-full items-center justify-between rounded-[6px] border text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 h-[56px] px-3 py-3 bg-white border-neutral-300"
                >
                  <span className="text-gray-500">Cidade onde reside</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </button>
                <button
                  type="button"
                  className="flex text-start w-full items-center justify-between rounded-[6px] border text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 h-[56px] px-3 py-3 bg-white border-neutral-300"
                >
                  <span className="text-gray-500">Área</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-[#231E16] text-sm leading-4 font-bold">Anexar o currículo</h2>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="relative border-2 border-dashed border-neutral-300 rounded-[6px] p-4 sm:p-6 text-center cursor-pointer hover:border-orange-400 transition-colors"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Clique para selecionar ou arraste</p>
                    <p className="text-xs text-gray-400 mt-1">PDF ou Word até 5MB</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <input
                    type="checkbox"
                    id="checkbox-privacy-policy"
                    className="w-4 h-4 rounded bg-white border border-gray-300 accent-[#FF4B12] cursor-pointer flex-shrink-0"
                    aria-label="Aceitar política de privacidade"
                    checked={isPrivacyAccepted}
                    onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                  />
                  <label htmlFor="checkbox-privacy-policy" className="text-sm text-gray-700 cursor-pointer">
                    Eu aceito a <a href="https://agex.com.br/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">política de privacidade</a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF4B12] text-white py-3 px-4 rounded-[32px] font-medium text-base transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 sm:mt-4"
                  disabled={!isPrivacyAccepted}
                >
                  Cadastrar-se
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}