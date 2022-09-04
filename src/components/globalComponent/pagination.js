import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const buttonItemRender = (current, type, element) => {
    if (type === 'prev') {
      return <button type="button">Prev</button>;
    }
    if (type === 'next') {
      return <button type="button">Next</button>;
    }
    return element;
  };

const PaginationDiv = () => {
    
    return (
        <div className='mx-auto flex-row-center mb-20'>
              <Pagination total={100} itemRender={buttonItemRender} />
        </div>
    ); 
}

export default PaginationDiv;
