const ExpenseItem = (): JSX.Element => {
  return (
    <div className='flex items-center gap-4 rounded-md bg-gradient-to-br from-slate-900 via-gray-950 to-slate-950 text-white p-4'>
      <div className='py-4 px-10 bg-[#010409] text-center border-gray-500 border rounded-md'>
        <p className='font-semibold'>March</p>
        <p>2021</p>
        <p className='text-4xl font-bold'>28</p>
      </div>
      <div className='flex items-center justify-between w-full'>
        <p className='text-2xl font-medium'>Bought MacBook Air M2</p>
        <div className='bg-indigo-800 px-6 py-2 rounded border-gray-500 border'>
          <p className='text-lg'>$800.00</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
