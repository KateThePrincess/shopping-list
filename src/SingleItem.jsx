import { useState } from 'react';
import { FaBasketShopping } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className='single-item'>
      {item.completed && (
        <label
          htmlFor={item.id}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <FaBasketShopping
            style={{
              display: 'inline',
              fontSize: '18px',
              border: '1px solid var(--primary-600)',
              borderRadius: '2px',
              padding: '2px',
              color: 'var(--white)',
              background: 'var(--primary-600)',
              transform: 'scale(1.1)',
            }}
          />
        </label>
      )}
      <input
        type='checkbox'
        id={item.id}
        checked={item.completed}
        onChange={() => editItem(item.id)}
        style={{ display: item.completed && 'none' }}
      />
      <p
        style={{
          fontVariant: 'all-small-caps',
          textDecoration: item.completed && 'line-through',
          color: item.completed && 'var(--grey-300)',
          textDecorationThickness: '1px',
        }}
      >
        {item.name}
      </p>
      <button
        className='close-button'
        type='button'
        onClick={() => removeItem(item.id)}
      >
        <MdClose />
      </button>
    </div>
  );
};
export default SingleItem;
