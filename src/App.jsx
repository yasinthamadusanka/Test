import './App.css'
import Header from './components/Organisms/Header'
import Home from './pages/Home'


function App() {
  

  return (
    <>
      <div className="app-container">
        <Header />
        <main className="content">
          <Home />
        </main>
      </div>

    </>
  )
}

export default App
