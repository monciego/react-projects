import { useState } from 'react';
import { data } from '../data';

const Cart = () => {
  const [orders, setOrder] = useState(data);

  const incrementQuantity = (orderId: number) => {
    setOrder((prevOrders) => {
      return prevOrders.map((order) => {
        if (order.id === orderId) {
          const price = order.price || order.defaultPrice;
          return {
            ...order,
            quantity: order.quantity + 1,
            price: price + order.defaultPrice,
          };
        }
        return order;
      });
    });
  };

  const decrementQuantity = (orderId: number) => {
    setOrder((prevOrders) => {
      return prevOrders
        .map((order) => {
          if (order.id === orderId) {
            const price = order.price || order.defaultPrice;
            return {
              ...order,
              quantity: order.quantity - 1,
              price: price - order.defaultPrice,
            };
          }
          return order;
        })
        .filter((order) => order.quantity !== 0);
    });
  };

  const removeOrder = (id: number) => {
    let newOrder = orders.filter((order) => order.id !== id);
    setOrder(newOrder);
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
                <i
                  onClick={() => decrementQuantity(order.id)}
                  className='fas fa-minus'
                ></i>
                <span>{order.quantity}</span>
                <i
                  onClick={() => incrementQuantity(order.id)}
                  className='fas fa-plus'
                ></i>
              </div>
              <div>
                <span className='order-price'>
                  ₱{order.price || order.defaultPrice}
                </span>
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
