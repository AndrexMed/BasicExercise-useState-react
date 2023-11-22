import './App.css';

import Header from '../src/Components/Header/Header'
import Card from './Components/CardComponent/Card';

function App() {

  const products = [
    {
      image: 'https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '1000',
      title: 'Producto 1'
    },
    {
      image: 'https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '2000',
      title: 'Producto 2'
    },
    {
      image: 'https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '3000',
      title: 'Producto 3'
    },
    {
      image: 'https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: '4000',
      title: 'Producto 4'
    },
  ];

  return (
    <>
      <Header title='Giovanni Andres Alzate Agudelo' />
      <div className='w-full bg-gray-200'>
        <div className='flex gap-5 flex-wrap justify-center mt-5 border p-5'>
          {products.map((item, index) => {
            return (
              <Card key={index} image={item.image} title={item.title} price={item.price} />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
