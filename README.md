# react-select-nigeria-states-lga

> A React Select library for Nigeria States to get LGA of selected states

[![NPM](https://img.shields.io/npm/v/react-select-nigeria-states-lga.svg)](https://www.npmjs.com/package/react-select-nigeria-states-lga) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
Live demo: [http://emmanuelchilaka.com/react-select-nigeria-states-lga/]

## Install

```bash
npm install --save react-select-nigeria-states-lga
```

## Usage

```jsx
import React, {useState} from 'react'
import { ReactNaijaStateLgaSelect } from 'react-select-nigeria-states-lga'

const App = () => {
  const [towns, setLga] = useState([]);
  const [naijaState, setNaijaState] = useState('');
  const [naijaLga, setNaijaLga] = useState('');

  return <ReactNaijaStateLgaSelect 
            naijaState={naijaState}
            naijaLga={naijaLga}
            towns={towns}
            setNaijaState={setNaijaState}
            setNaijaLga={setNaijaLga}
            setLga={setLga}
         />
}

export default App
```

### States and LGA data

Full list of [states](https://github.com/echilaka1/react-select-nigeria-states-lga/blob/main/src/state.js).

## Props

### stateVal

`stateVal` is a required function prop that holds the current value of the selected Nigeria State.

```javascript
    <ReactNaijaStateLgaSelect
      ...
      stateVal={val => setSelectedState(val)}
    />
```

### lgaVal

`lgaVal` is a required function prop that holds the current value of the selected Nigeria State, selected LGA.

```javascript
    <ReactNaijaStateLgaSelect
      ...
      lgaVal={val => setSelectedLga(val)}
    />
```

### statePlaceholder

`statePlaceholder` is an optional `string` prop used replace the default placeholder text for the state select input.

```javascript
    <ReactNaijaStateLgaSelect
    statePlaceholder="Select State" />
```

### lgaPlaceholder

`lgaPlaceholder` is an optional `string` prop used replace the default placeholder text for the lga select input.

```javascript
    <ReactNaijaStateLgaSelect
    lgaPlaceholder="Select State" />
```

### stateClassName

`stateClassName` is an optional `string` prop used to pass a `className` to the state select input.

```javascript
    <ReactNaijaStateLgaSelect
      ...
      stateClassName="style-select"
    />
```

### lgaClassName

`lgaClassName` is an optional `string` prop used to pass a `className` to the lga select input.

```javascript
    <ReactNaijaStateLgaSelect
      ...
      lgaClassName="style-select"
    />
```

## License

This project is distributed under the MIT license. © [echilaka1](https://github.com/echilaka1)
