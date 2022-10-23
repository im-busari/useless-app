import React, { useState } from 'react';
import { IApliance } from '../../interfaces/IAppliance';
import AccordionItem from './AccordionItem';

const AccordionList = () => {

    const accordionData = [{
      id: '1',
      appliance: 'Dishwasher',
      description: `Washed the plates from last night (gathering with friends).`,
      timestamp: "data",
      score: 5
    }, {
      id: '2',
      appliance: 'Washing machine',
      description: `Washed baby clothes.`,
      timestamp: "data",
      score: 3
    },
    {
      id: '3',
      appliance: 'Microwave',
      description: `Cooked potatoes.`,
      timestamp: "data",
      score: 5
    }
  ];
  
  
    return (
        <>
        {
            accordionData.map((data: IApliance) => {
                return <AccordionItem key={data.id} appliance={data.appliance} description={data.description}/>
            })
        }
        </>
    );
  };
  
  export default AccordionList;