import React, { useState } from 'react';

const AccordionItem = (props:{ title: string, content: string}) => {
    const [isActive, setIsActive] = useState(false);
    const { title, content } = props;
  
    return (
    <div className='w-100 my-2'>
        <div className="accordion-item">
          <div className="d-flex justify-content-between bg-light p-3" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div>toggle</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    );
  };
  
  export default AccordionItem;