import React from 'react';

const Nav = () => {
  return (
    <div class="bg-gray-50 font-body">
      <nav class="flex items-center  justify-between px-64 mx-auto py-2">
        <h1>
          <img class="h-12" src="/imgs/logo.png" alt=""></img>
        </h1>
        <div>
          <ul>
            <li>
              <a href="" class="ml-12 text-lg hover:text-pink-500">
                Home
              </a>
              <a href="" class="ml-12 text-lg hover:text-pink-500">
                Service
              </a>
              <a href="" class="ml-12 text-lg hover:text-pink-500">
                Clients
              </a>
              <a href="" class="ml-12 text-lg hover:text-pink-500">
                News
              </a>
              <a href="" class="ml-12 text-lg hover:text-pink-500">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div class="flex items-center space-x-1">
          <button class="btn">SignUp</button> 
          <button class="btn">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
