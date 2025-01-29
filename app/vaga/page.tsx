import Image from 'next/image'
import Link from 'next/link'
import { VagaCard } from '@/components/vaga-card';

export default function VagasPage() {
  // Exemplo de dados de vagas - você pode substituir por dados reais da sua API
  const vagas = [
    {
      id: "1",
      title: "CONFERENTE DE CARGA",
      company: "AGEX",
      location: "Maringá",
      type: "CLT",
      salary: "A combinar"
    },
    {
      id: "2",
      title: "CONFERENTE DE CARGA",
      company: "AGEX",
      location: "Curitiba",
      type: "CLT",
      salary: "A combinar"
    },
    {
      id: "3",
      title: "CONFERENTE DE CARGA",
      company: "AGEX",
      location: "Londrina",
      type: "CLT",
      salary: "A combinar"
    },
    // Adicione mais vagas conforme necessário
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Vagas Disponíveis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vagas.map((vaga) => (
          <VagaCard
            key={vaga.id}
            id={vaga.id}
            title={vaga.title}
            company={vaga.company}
            location={vaga.location}
            type={vaga.type}
            salary={vaga.salary}
          />
        ))}
      </div>
    </main>
  );
}
