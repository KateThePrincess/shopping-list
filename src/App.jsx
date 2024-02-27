import { useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import { Bounce, Flip, ToastContainer, Zoom } from 'react-toastify';
import { toast } from 'react-toastify';
import { FaCartPlus } from 'react-icons/fa6';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');
console.log(defaultList);

const App = () => {
  const [items, setItems] = useState(defaultList);
  setLocalStorage(items);
  //looking for the name - its the only thing i want to grab from Form component
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    //we don't want to override items so we have to copy them
    setItems(newItems);
    toast.success('Item has been added to the list!', {
      icon: (
        <FaCartPlus style={{ color: 'var(--primary-600)', fontSize: '20px' }} />
      ),
      style: {
        color: `black`,
        fontFamily: 'Comfortaa, sans-serif',
        textTransform: 'none',
        fontSize: '12.5px',
      },
    });
  };
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <>
      <section className='section-center'>
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {items.length !== 0 && (
            <button className='btn btn-block' onClick={() => setItems([])}>
              Clear all
            </button>
          )}
        </div>
      </section>
      <ToastContainer
        position='top-center'
        hideProgressBar='true'
        autoClose={800}
        transition={Bounce}
        closeButton={false}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItem: 'center',
          justifyContent: 'space-around',
          padding: '20px',
          color: 'var(--primary-500)',
        }}
      />
    </>
  );
};

export default App;
