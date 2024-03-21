import React from 'react';
import { ModalBackground } from './ModalBackground';
import { ModalContainer } from './ModalContainer';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { useShopCartContext } from '../../context/ShopCartContext';
export const Modal = ({ setShowModal }) => {
  const { clearCart } = useShopCartContext();
  const handleClearCart = () => {
    clearCart();
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className=' h-screen w-screen'>
      <ModalBackground>
        <ModalContainer>
          <ModalBody>
            <p>You're about to delete the contents of your shopping cart. </p>
            <p className='mt-1 font-semibold'>Are you sure?</p>
            <div className='mt-4 flex justify-between'>
              <button
                onClick={handleClearCart}
                className='bg-neutral-950 p-2 text-neutral-50'
              >
                Clear Cart
              </button>
              <button
                onClick={handleCloseModal}
                className='bg-neutral-950 p-2 text-neutral-50'
              >
                Cancel
              </button>
            </div>
          </ModalBody>
        </ModalContainer>
      </ModalBackground>
    </div>
  );
};
