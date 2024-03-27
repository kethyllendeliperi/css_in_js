import Header from './Components/Header'
import Hero from './Components/Hero'
import JobsForm from './Components/JobForm'
import JobsList from './containers/JobsList';
import GlobalStyle from './styles'

function App() {
  const onSearch = (term: string) => {
    console.log('Termo pesquisado:', term);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <div className='container'>
        <JobsForm onSearch={onSearch} />
        <JobsList />
      </div>
    </>
  )
}

export default App
