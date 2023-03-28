import * as ReactDOMClient from 'react-dom/client';

import App from './App';
import Welcome from './views/Welcome';

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);

//root.render(<App callback={() => console.log("renderered")} />);
root.render(<Welcome callback={() => console.log(" Welcome renderered")} />);
