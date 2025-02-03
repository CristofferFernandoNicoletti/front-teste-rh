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
      title: "ASSISTENTE ADMINISTRATIVO",
      company: "AGEX",
      location: "São Paulo",
      type: "CLT",
      salary: "A combinar"
    }
  ];

  return (
    <main className="pt-32 pb-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Vagas Disponíveis</h1>
        
        <div className="grid gap-6">
          {vagas.map((vaga) => (
            <VagaCard key={vaga.id} {...vaga} />
          ))}
        </div>
      </div>
    </main>
  );
}
