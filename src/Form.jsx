import { useState } from 'react';
import { FaBasketShopping } from 'react-icons/fa6';
import { Bounce, Flip, ToastContainer, Zoom } from 'react-toastify';
import { toast } from 'react-toastify';
import { PiWarningCircleFill } from 'react-icons/pi';
import { MdClose } from 'react-icons/md';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.success('You should provide an item!', {
        icon: (
          <PiWarningCircleFill
            style={{ color: 'var(--primary-600)', fontSize: '20px' }}
          />
        ),
        style: {
          color: `black`,
          fontFamily: 'Comfortaa, sans-serif',
          textTransform: 'none',
          fontSize: '13px',
        },
        closeButtonStyle: { color: 'var(--primary-600)' },
      });
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };

  const iconStyle = {
    color: 'var(--primary-600)',
    fontSize: '50px',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translate(-100%, -120%)',
  };
  return (
    <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
      <FaBasketShopping style={iconStyle} />
      <h4>shopping list</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button className='btn' type='submit'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
