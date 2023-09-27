import { useState } from 'react';
import { data } from '../data';

const Cart = () => {
  const [orders, setOrder] = useState(data);

  const removeOrder = (id: number) => {
    let newFood = orders.filter((order) => order.id !== id);
    setOrder(newFood);
  };

  return (
    <div className='items'>
      <p style={{ margin: '1.5em 0' }}>
        {orders.length === 0
          ? 'You have empty food cart'
          : `${'You have'}  ${orders.length}  ${'orders'}`}
      </p>
      {orders.map((order) => {
        return (
          <div key={order.id} className='item'>
            <div className='order'>
              <p>
                {order.orderName} | {order.size}
              </p>
            </div>
            <div className='order-actions'>
              <div className='order-quantity'>
                <i className='fas fa-minus'></i>
                <span>0</span>
                <i className='fas fa-plus'></i>
              </div>
              <div>
                <span className='order-price'>₱{order.price}</span>
                <i
                  onClick={() => removeOrder(order.id)}
                  className='fas fa-times'
                ></i>
              </div>
            </div>
          </div>
        );
      })}
      <button
        className={orders.length === 0 ? 'remove-all-none' : 'remove-all'}
        onClick={() => {
          setOrder([]);
        }}
      >
        Remove All
      </button>
    </div>
  );
};

export default Cart;
