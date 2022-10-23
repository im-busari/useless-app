import React, { useState } from 'react';
import { IApliance } from '../../interfaces/IAppliance';

const AccordionItem = (props: IApliance) => {
    const [isActive, setIsActive] = useState(false);
    const { appliance, description } = props;
  
    return (
    <div className='w-100 my-2'>
        <div className="accordion-item">
          <div className="d-flex justify-content-between bg-light p-3" onClick={() => setIsActive(!isActive)}>
            <div>{appliance}</div>
            <div>&#8595;</div>
          </div>
          {isActive && <div className="accordion-content p-2 mb-2">{description}</div>}
        </div>
      </div>
    );
  };
  
  export default AccordionItem;