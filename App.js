import * as ReactDOMClient from 'react-dom/client';

export default function App({ callback }) {
  
  return (
    <div ref={callback}>
      <h1>Hello World</h1>
    </div>
  );
}


