import Header from './Components/Header'
import Hero from './Components/Hero'
import JobsList from './containers/JobsList';
import GlobalStyle from './styles'

function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <div className='container'>
        <JobsList />
      </div>
    </>
  )
}

export default App
