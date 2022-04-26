import { FormEventHandler } from 'react';

export const CheckoutForm = () => {
  return <form action="POST" onSubmit={handleSubmit}></form>;
};

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  console.log('Siema');
};
