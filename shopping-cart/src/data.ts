type TData = {
  id: number;
  orderName: string;
  size: 'Regular' | 'Medium' | 'Large';
  price: number;
};

export const data: TData[] = [
  {
    id: 1,
    orderName: 'Carbonara Supreme',
    size: 'Large',
    price: 429.0,
  },
  {
    id: 2,
    orderName: 'Seafood Supreme',
    size: 'Large',
    price: 429.0,
  },
  {
    id: 3,
    orderName: 'Super Supreme',
    size: 'Large',
    price: 429.0,
  },
  {
    id: 4,
    orderName: 'Pepperoni Pizza',
    size: 'Regular',
    price: 369.0,
  },
  {
    id: 5,
    orderName: 'Bacon Margherita ',
    size: 'Medium',
    price: 399.0,
  },
];
