'use client'
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="max-w-screen-xl px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl">The Memory Bank</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©2024 Thejayadad
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a href="#" className="text-gray-500 mx-2">
          <FiFacebook size={20} />
        </a>
        <a href="#" className="text-gray-500 mx-2">
          <FiTwitter size={20} />
        </a>
        <a href="#" className="text-gray-500 mx-2">
          <FiInstagram size={20} />
        </a>
        <a href="#" className="text-gray-500 mx-2">
          <FiGithub size={20} />
        </a>
      </span>
    </div>
  );
};

export default Footer;
