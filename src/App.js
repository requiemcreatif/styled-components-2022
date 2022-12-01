import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const images = [
  {imgUrl:"https://images.unsplash.com/photo-1577162067354-be7e0589df7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyMzc2MjMzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60", title: "Automatic critical CSS", text: "styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.", id:"01"},

  {imgUrl:"https://images.unsplash.com/photo-1521055447672-2fa9530db421?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MjM3NjIzM3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60", title: "No class name bugs", text: "styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.", id:"02"},

  {imgUrl:"https://images.unsplash.com/photo-1516366434321-728a48e6b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60", title: "Simple dynamic styling", text: "adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.", id:"03"
},
  {imgUrl:"https://images.unsplash.com/photo-1561312176-5aedf7172115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60", title: "Painless maintenance", text: "you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.", id:"04"
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
