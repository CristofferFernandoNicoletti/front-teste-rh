'use client';

import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-muted-foreground">Empresa</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/quem-somos" className="text-sm hover:text-primary transition-colors">
                Quem somos
              </Link>
              <Link href="/qualidade" className="text-sm hover:text-primary transition-colors">
                Qualidade
              </Link>
              <Link href="/solucoes" className="text-sm hover:text-primary transition-colors">
                Soluções
              </Link>
              <Link href="/atendimento" className="text-sm hover:text-primary transition-colors">
                Ouvidoria
              </Link>
            </nav>
          </div>

          <Separator />

          <div className="space-y-3">
            <nav className="flex flex-col space-y-2">
              <Link href="/vagas" className="text-sm hover:text-primary transition-colors">
                Vagas
              </Link>
              <Link href="/blog" className="text-sm hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          <Separator />

          <div className="space-y-4">
            <Button asChild variant="outline" className="w-full">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/cadastro">Cadastre-se</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
