import Header from './components/Header'
import ReactInfo from './components/ReactInfo'
import Learning from './components/Learning'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="inicio" className="hero">
          <p className="hero-subtitle">
            HOLA, SOY ESTUDIANTE DE INFORMÁTICA
          </p>

          <h1>Mi camino aprendiendo React</h1>

          <p className="hero-description">
            Estoy aprendiendo a crear aplicaciones web utilizando React,
            JavaScript y Vite.
          </p>

          <a href="#react" className="hero-button">
            Explorar mi aprendizaje
          </a>
        </section>

        <ReactInfo />

        <Learning />
      </main>
    </>
  )
}

export default App