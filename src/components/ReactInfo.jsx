function ReactInfo() {
  return (
    <section id="react" className="section">
      <div className="section-heading">
        <p className="section-label">APRENDIENDO REACT</p>

        <h2>¿Qué es React?</h2>

        <p>
          React es una biblioteca de JavaScript utilizada para crear
          interfaces de usuario. Permite construir páginas web utilizando
          componentes que pueden reutilizarse en diferentes partes de una
          aplicación.
        </p>
      </div>

      <div className="info-cards">
        <article className="info-card">
          <span>🧩</span>
          <h3>Componentes</h3>
          <p>
            Permiten dividir una página en partes pequeñas y reutilizables.
          </p>
        </article>

        <article className="info-card">
          <span>⚡</span>
          <h3>Vite</h3>
          <p>
            Es la herramienta que utilizamos para crear y ejecutar nuestro
            proyecto React durante el desarrollo.
          </p>
        </article>

        <article className="info-card">
          <span>🔄</span>
          <h3>Interactividad</h3>
          <p>
            React permite crear interfaces que responden a las acciones
            realizadas por los usuarios.
          </p>
        </article>
      </div>
    </section>
  )
}

export default ReactInfo