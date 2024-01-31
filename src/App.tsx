import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Authenticate } from "./Authenticate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Auth0Provider
      domain="dev-zf0y7p3ehpf5cxb0.us.auth0.com"
      clientId="W2dRu3HKxa3rXgFKfvWj8h2nPXnFRdxu"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      // cacheLocation={"localstorage"}
      cookieDomain=".vercel.app"
    >
      <>
        <Authenticate />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </Auth0Provider>
  );
}

export default App;
