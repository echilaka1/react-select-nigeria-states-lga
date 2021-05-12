import React from 'react';
import styles from './styles.module.css'
import states from './state';

export const ReactNaijaStateLgaSelect = (props) => {
  const stateList = Object.keys(states).map(key => ({
    name: key
  }));

  const handleStateSelect = e => {
    props.stateVal(e.target.value);
    const stateSel = e.target.value;
    const lgaSel = stateSel !== '' ? states[stateSel] : '';
    props.setNaijaState(stateSel);
    props.setLga(lgaSel);
    props.setNaijaLga('');
  };

  const handleLgaSelect = e => {
    props.lgaVal(e.target.value);
    const lgaSel = e.target.value;
    props.setNaijaLga(lgaSel);
  };

  return (
    <div>
      <select
        onChange={e => handleStateSelect(e)}
        className={props.stateClassName || styles.test }
        value={props.naijaState}
      >
        <option value=""> {props.statePlaceholder || 'Select State'}</option>
        {stateList.map((state, key) => (
          <option key={key} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      <select
        name="Cities"
        onChange={e => handleLgaSelect(e)}
        className={props.lgaClassName || styles.test }
        value={props.naijaLga}
      >
        <option value=""> {props.lgaPlaceholder || 'Select LGA'}</option>
        {props.towns.map((lga, key) => (
          <option key={key} value={lga}>
            {lga}
          </option>
        ))}
      </select>
    </div>
  );
}

