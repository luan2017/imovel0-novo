import { NextPage } from 'next';
import React from 'react';

const Footer: NextPage = () => {
  return(
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SOBRE</h5>
        <p>Como funciona o Imovel Certo?</p>
        <p>Novidades</p>
        <p>Investidores</p>
        <p>Imovel Certo Plus</p>
        <p> Imovel Certo Luxo</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMUNIDADE</h5>
        <p>Como funciona o Imovel Certo?</p>
        <p>Novidades</p>
        <p>Investidores</p>
        <p>Imovel Certo Plus</p>
        <p> Imovel Certo Luxo</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOSTS</h5>
        <p>Como funciona?</p>
        <p>Novidades</p>
        <p>Investidores</p>
        <p>Airbnb Plus</p>
        <p> Airbnb Luxe</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPORTE</h5>
        <p>Como funciona?</p>
        <p>Novidades</p>
        <p>Investidores</p>
        <p>Airbnb Plus</p>
        <p> Airbnb Luxe</p>
      </div>
    </div>
  )
}

export default Footer;