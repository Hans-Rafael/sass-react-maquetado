import './App.scss'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Blockquote } from './components/citaPrincipal/Blockquote'

const App = () => {

  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Hero />
        <Blockquote/>
      </main>
    </div>
  )
}

export default App
