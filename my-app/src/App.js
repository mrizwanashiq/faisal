
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  './App.css'
import Home from './component/Home';
import About from './component/About';
import Store from './Store';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Error from './component/Error';
import SingalProduct from './component/SingalProduct';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './component/components/Header';
import Footer from './component/components/Footer';

function App() {

  const theme = {
    colors:{
       color: "purple"
    },
    media:{
      mobile: "768px",
      tab: "998px",
    },
  };
  return ( 
               <> 
            
               <ThemeProvider theme={theme}>
               <BrowserRouter>
               <GlobalStyle/>
               <Header/>
                 <Routes>
                   <Route path='/home' element={<Home/>}/>
                   <Route path='about' element={<About/>}/>
                   <Route path='store' element={<Store/>}/>
                   <Route path='contact' element={<Contact/>}/>
                   <Route path='cart' element={<Cart/>}/>
                   <Route path='*' element={<Error/>}/>
                   <Route path='singalproduct/:id' element={<SingalProduct/>}/> 
                 </Routes>
                 <Footer/>
               </BrowserRouter>
               </ThemeProvider>
             
              </>
      
               
          )  
  }    

export default App;
