import Header from './Header'
import  Home from './Home'
import  Products from './Products'

const Content = ({page}) => {
  if(page.startsWith('p')){
    return <Products />
  }else{
    return <Home />
  }
}

function App() {
  const pathname = window.location.pathname
  let page = pathname.includes("P")? 'products' : 'home'
  return (
    <>
      <Header />
      <Content page={page}/>
    </>
  );
}

export default App;
