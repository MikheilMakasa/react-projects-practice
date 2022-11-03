import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [shown, setShown] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title} </h4>
        <button
          className='btn'
          onClick={() => {
            setShown(!shown);
          }}
        >
          {shown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {shown && <p>{info}</p>}
    </article>
  );
};

export default Question;
