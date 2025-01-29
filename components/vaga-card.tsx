import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VagaCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
}

export function VagaCard({ id, title, company, location, type, salary }: VagaCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-90" />
      
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-primary-foreground/90 text-lg">
          {company}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-sm">
            {location}
          </Badge>
          <Badge variant="secondary" className="text-sm">
            {type}
          </Badge>
          {salary && (
            <Badge variant="secondary" className="text-sm">
              {salary}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="relative">
        <Button asChild className="w-full" variant="secondary">
          <Link href={`/vagas/${id}`}>
            Ver vaga
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
