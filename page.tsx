
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-black text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">FOKO LLC</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Especialistas em instalação de pisos, azulejos e remodelações elegantes.
        </p>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nossos Serviços</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card><CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Instalação de Pisos</h3>
            <p>Trabalhamos com diversos tipos de pisos, entregando acabamento perfeito.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Azulejamentos</h3>
            <p>Aplicação de tile em cozinhas, banheiros, salas e muito mais.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Remodelação de Chuveiros</h3>
            <p>Transforme seu chuveiro em um espaço moderno e funcional.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Reformas com Tile</h3>
            <p>Renovamos qualquer ambiente com estilo e qualidade incomparável.</p>
          </CardContent></Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6 text-center">Atendemos em</h2>
        <p className="text-center text-lg max-w-xl mx-auto">
          Georgia, Tennessee, Alabama, South Carolina e North Carolina.
        </p>
      </section>

      <section className="py-16 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Agende seu Orçamento</h2>
        <form className="grid gap-4">
          <Input placeholder="Seu nome" />
          <Input placeholder="Seu e-mail" type="email" />
          <Input placeholder="Seu telefone" type="tel" />
          <Textarea placeholder="Descreva seu projeto" rows={4} />
          <Button className="w-full bg-black text-white hover:bg-gray-800">Enviar Mensagem</Button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Ou fale com a gente direto no <strong>(404) 990-1473</strong>
        </p>
      </section>

      <footer className="bg-black text-white text-center py-6">
        <p>© {new Date().getFullYear()} FOKO LLC. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
