# react-collapse-details

Componente React para conteúdos extras

![npm](https://img.shields.io/npm/v/react-collapse-details)
![NPM](https://img.shields.io/npm/l/react-collapse-details)

![Test Image 1](https://github.com/josellia/img-collapse/blob/master/collapse.PNG)

## Como instalar

Abaixo as maneiras de como instalar a biblioteca usando o npm ou yarn:

```
npm i react-collapse-details
# ou
yarn add react-collapse-details
```

## Como usar

```jsx
import React from "react";
import "./App.css";
import DetailsCollapse from "react-collapse-details";

function App() {
  return (
    <div className="container">
      <DetailsCollapse width="50rem" summary="Lorem ipsum dolor sit">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          voluptates obcaecati
        </p>
      </DetailsCollapse>
    </div>
  );
}

export default App;
```

## Propriedades

Este componente é uma abstração de um collapse, mas utilizando propriedades nativas do HTML.

| Props               | type    | required | Descrção                         |
| ------------------- | ------- | -------- | -------------------------------- |
| width               | string  | X        |                                  |
| summary             | string  | X        |                                  |
| children            | element | X        |                                  |
| styleDetailsSummary | string  |          | Classe para estilizar o summary  |
| styleDetailsContent | string  |          | Classe para estilizar o contéudo |
