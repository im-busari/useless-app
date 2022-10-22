import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const AccordionList = () => {

    const accordionData = [{
      id: '1',
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`
    }, {
      id: '2',
      title: 'Section 2',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`
    }];
  
  
    return (
        <>
        {
            accordionData.map((data: { title: string, content: string }) => {
                return <AccordionItem key={data.title} title={data.title} content={data.content}/>
            })
        }
        </>
    );
  };
  
  export default AccordionList;