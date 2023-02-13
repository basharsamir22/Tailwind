import React from 'react';

const Header = () => {
  return (
    <header class="flex  flex-wrap items-center justify-between px-10 md:px-64 mx-auto my-32 text-center">
      <div class="w-full md:w-1/2 ">
        <img class="h-96 mx-auto" src="imgs/header.png" alt="" />
      </div>

      <div class="w-full md:w-1/2 font-sans font-thin space-y-8 mt-20 md:mt-0">
        <h2 class="text-3xl">Multipurpose landing template</h2>
        <h1 class="text-6xl font-bold text-primary">Beautifully</h1>
        <h1 class="text-6xl font-bold text-primary">simple, code.</h1>
        <h3 class="text-2xl tracking-wider">
          Codelander is a beautifully simple, clean and lightweight landing page
          template for all types of businesses, with bold and bright colours.
        </h3>
        <button
          class="bg-pink-500 text-white px-10 py-3 hover:bg-blue-500 rounded-full"
        >
          Learn More
        </button>
      </div>
    </header>

    
  );
};

export default Header;
