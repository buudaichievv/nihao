
import './App.css';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Price from './Price/Price'
import Header from './Header';

import Bastellers from './Bastellers/Bastellers';
function App(props) {
  return (
    <>

    <Header/>
    <div className='App'>
      <div className = 'blur_wrap'>
      <div id = 'wrapper'>
        <Banner/>
        <Category category={props.category}/>
        <SpecialOffer />
        <Price />
        <Bastellers />
      </div>
      </div>
    </div>
    </>
  )
}

export default App;
