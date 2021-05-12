import React, {useState} from 'react'
import { ReactNaijaStateLgaSelect } from 'react-select-nigeria-states-lga'
import 'react-select-nigeria-states-lga/dist/index.css'

const App = () => {
  const [towns, setLga] = useState([]);
  const [naijaState, setNaijaState] = useState('');
  const [naijaLga, setNaijaLga] = useState('');

  const stateChangedHandler = val => {
    console.log('Selected State', val);
  };

  const lgaChangedHandler = val => {
    console.log('Selected LGA', val);
  };

  return <ReactNaijaStateLgaSelect 
            naijaState={naijaState}
            naijaLga={naijaLga}
            towns={towns}
            setNaijaState={setNaijaState}
            setNaijaLga={setNaijaLga}
            setLga={setLga}
            stateVal={stateChangedHandler}
            lgaVal={lgaChangedHandler} 
         />
}

export default App
