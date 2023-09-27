type TData = {
  id: number;
  orderName: string;
  size: 'Regular' | 'Medium' | 'Large';
  defaultPrice: number;
  quantity: number;
  price?: number;
};

export const data: TData[] = [
  {
    id: 1,
    orderName: 'Carbonara Supreme',
    size: 'Large',
    defaultPrice: 429.0,
    quantity: 1,
  },
  {
    id: 2,
    orderName: 'Seafood Supreme',
    size: 'Large',
    defaultPrice: 429.0,
    quantity: 1,
  },
  {
    id: 3,
    orderName: 'Super Supreme',
    size: 'Large',
    defaultPrice: 429.0,
    quantity: 1,
  },
  {
    id: 4,
    orderName: 'Pepperoni Pizza',
    size: 'Regular',
    defaultPrice: 369.0,
    quantity: 1,
  },
  {
    id: 5,
    orderName: 'Bacon Margherita ',
    size: 'Medium',
    defaultPrice: 399.0,
    quantity: 1,
  },
];
