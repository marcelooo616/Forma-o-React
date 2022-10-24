import logo from './logo.svg';
import './App.css';

function App() {
  
  return (

    <div className="container">
      <div className='navbar'>
         <h1 className='item-title'> Exercício - Café da manhã </h1>
      </div>
      <div>
         <div className='item-title-list'>
              <h1>Lista de Compras</h1>
         </div>
         <div className='list'>
             <ul>
                  <li>Pão</li>
                  <li>Banana</li>
                  <li>Milk Shake de Doce de Leite</li>
                  <li >Nutella</li>
                  <li>Sorvete</li>
             </ul>
         </div>
      </div>
    </div>
  );
}

export default App;
