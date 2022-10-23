import React, { useState } from 'react';
import { IApliance } from '../../interfaces/IAppliance';
import { IUser } from '../../interfaces/IUser';

const UserItem = (props: IUser) => {
    const { name, score } = props;
  
    return (
    <div className='w-100 my-2'>
        <div className="accordion-item">
          <div className="d-flex justify-content-between bg-light rounded p-3">
            <div>{name}</div>
            <div>{score}</div>
          </div>
          {/* {isActive && <div className="accordion-content p-2 mb-2">{description}</div>} */}
        </div>
      </div>
    );
  };
  
  export default UserItem;