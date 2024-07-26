// to simplify code, multiple components are stored in a single file
// this way of organizing code is NOT recommended

import { createContext, useContext } from 'react';

const ColorContext = createContext({ color: 'black', backgroundColor: 'white' });

function GrandChildComponent() {
  const { color, backgroundColor } = useContext(ColorContext);

  return (
    <h4 style={{ color: color, backgroundColor: backgroundColor }}>
      GrandChildComponent with inherited text color and new background color
    </h4>
  );
}

function ChildComponent() {
  const color = useContext(ColorContext);
  const newColor = { ...color, backgroundColor: 'grey' };

  return (
    <ColorContext.Provider value={newColor}>
      <h3 style={{ color: newColor.color, backgroundColor: newColor.backgroundColor }}>
        ChildComponent with inherited text color and new background color
      </h3>
      <GrandChildComponent />
    </ColorContext.Provider>
  );
}

function ParentComponent() {
  const color = useContext(ColorContext);
  const newColor = { ...color, color: 'blue' };

  return (
    <ColorContext.Provider value={newColor}>
      <h2 style={{ color: newColor.color, backgroundColor: newColor.backgroundColor }}>
        ParentComponent with inherited background color and new text color
      </h2>
      <ChildComponent />
    </ColorContext.Provider>
  );
}

function GrandParentComponent() {
  const { color, backgroundColor } = useContext(ColorContext);

  return (
    <ColorContext.Provider value={{ color: color, backgroundColor: backgroundColor }}>
      <h1 style={{ color: color, backgroundColor: backgroundColor }}>
        GrandParentComponent with default ColorContext
      </h1>
      <ParentComponent />
    </ColorContext.Provider>
  )
}

export default function ContextApp() {
  return (
    <GrandParentComponent />
  );
}
