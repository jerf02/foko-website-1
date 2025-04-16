
export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <section style={{ background: '#000', color: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>FOKO LLC</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '1rem auto' }}>
          Especialistas em instalação de pisos, azulejos e remodelações elegantes.
        </p>
      </section>

      <section style={{ padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Nossos Serviços</h2>
        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px', margin: '0 auto' }}>
          <li><strong>Instalação de Pisos:</strong> diversos tipos de pisos com acabamento perfeito.</li>
          <li><strong>Azulejamentos:</strong> cozinhas, banheiros, salas e mais.</li>
          <li><strong>Remodelação de Chuveiros:</strong> chuveiros modernos e funcionais.</li>
          <li><strong>Reformas com Tile:</strong> ambientes renovados com estilo.</li>
        </ul>
      </section>

      <section style={{ background: '#f5f5f5', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Atendemos em</h2>
        <p>Georgia, Tennessee, Alabama, South Carolina e North Carolina.</p>
      </section>

      <section style={{ padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Agende seu Orçamento</h2>
        <form style={{ display: 'grid', gap: '1rem' }}>
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <input type="tel" placeholder="Seu telefone" required />
          <textarea placeholder="Descreva seu projeto" rows={4}></textarea>
          <button type="submit" style={{ background: '#000', color: '#fff', padding: '1rem', border: 'none' }}>
            Enviar Mensagem
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          Ou fale com a gente direto no <strong>(404) 990-1473</strong>
        </p>
      </section>

      <footer style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '2rem' }}>
        <p>© {new Date().getFullYear()} FOKO LLC. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
