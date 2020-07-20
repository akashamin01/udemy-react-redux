import React,{useState} from 'react';
import Accordion from './components/Accordion.js';
import Search from './components/Search.js';
import Dropdown from './components/Dropdown.js'
const items =[
  {
    title:'what is your name?',
  content:'my name is akash'
  },
  {
    title:'where do you live?',
  content:'I Live in vadodara'
  },
  {
    title:'what are your hobbies?',
  content:'I love playing tennis also i am avid cyclist'
  },
];


const options =[
  {
  label:'the color red',
  value:'red'
},
  {
  label:'the color blue',
  value:'blue'
},
  {
  label:'the color gold',
  value:'gold'
  }
];

export default () => {
  const[selected,setSelected] = useState(options[0]);

  return (
    <div>
    <Dropdown
    selected={selected}
    onSelectedChange={setSelected}
    options={options}
    />
    </div>
  );
};
