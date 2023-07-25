import React from 'react';

const Products = () => {
  return (
    <section id='apple+' className='mt-12 h-[80vh] relative'>
      <img className='w-full h-full object-cover' src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/how-many-episodes-hijack-finale-release-date.jpg" alt="" />
      <div className='absolute bottom-2 text-white p-4 left-6 blue-glassmorphism'>
        <h1 className='text-6xl font-bold mx-16 my-5'>HIJACK</h1>
        <p className='text-[14px] mx-6'>A flight home becomes a fight to survive<br />Watch New Episode Wednesday at <span className='text-[#de3838] font-bold'>Apple+</span></p>
        <button className='bg-white py-4 px-24 mx-6 my-3 text-bold mt-6 items-center text-black rounded cursor-pointer'>
          Subscribe</button>
      </div>
    </section>
  );
};

export default Products;
