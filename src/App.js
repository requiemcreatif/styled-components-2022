import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const images = [
  {imgUrl:"https://images.unsplash.com/photo-1584759726383-11001cad8059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", title: "Automatic critical CSS", text: "styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.", id:"01"},

  {imgUrl:"https://images.unsplash.com/photo-1661091856780-88d7d4091c83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", title: "No class name bugs", text: "styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.", id:"02"},

  {imgUrl:"https://images.unsplash.com/photo-1575655971373-a38566870b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", title: "Simple dynamic styling", text: "adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.", id:"03"
},
  {imgUrl:"https://images.unsplash.com/photo-1596350327329-936d8e22d1fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", title: "Painless maintenance", text: "you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.", id:"04"
},
]

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Main images={images}/>
      <Footer/>
    </div>
  );
}

export default App;
