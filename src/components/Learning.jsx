function Learning() {
  return (
    <section id="aprendizaje" className="section">
      <div className="section-heading">
        <p className="section-label">MI APRENDIZAJE</p>

        <h2>Lo que estoy aprendiendo</h2>

        <p>
          Durante mi aprendizaje estoy conociendo diferentes herramientas y
          conceptos que me permiten desarrollar aplicaciones web modernas.
        </p>
      </div>

      <div className="info-cards">
        <article className="info-card">
          <span>⚛️</span>
          <h3>JSX</h3>
          <p>
            Estoy aprendiendo a utilizar JSX para escribir estructuras de
            interfaces dentro de componentes React.
          </p>
        </article>

        <article className="info-card">
          <span>🧩</span>
          <h3>Componentes</h3>
          <p>
            Aprendo a dividir una aplicación en componentes pequeños,
            organizados y reutilizables.
          </p>
        </article>

        <article className="info-card">
          <span>💻</span>
          <h3>JavaScript</h3>
          <p>
            Estoy reforzando mis conocimientos de JavaScript para crear
            aplicaciones más dinámicas e interactivas.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Learning