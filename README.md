# react-collapse-details

React component for extra content

![npm](https://img.shields.io/npm/v/react-collapse-details)
![NPM](https://img.shields.io/npm/l/react-collapse-details)

[![Watch the video](https://github.com/josellia/img-collapse/blob/master/details.mp4)]

## How to install

Below are ways to install the library using npm or yarn:

```
npm i react-collapse-details
# ou
yarn add react-collapse-details
```

## How to use

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

## Properties

This component is an abstraction of a collapse, but using native HTML properties.

| Props               | type    | required | Description                |
| ------------------- | ------- | -------- | -------------------------- |
| width               | string  | X        |                            |
| summary             | string  | X        |                            |
| children            | element | X        |                            |
| styleDetailsSummary | string  |          | Class to style the summary |
| styleDetailsContent | string  |          | Class to style the content |
