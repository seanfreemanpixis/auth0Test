import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export const Authenticate = () => {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    logout,
    isLoading,
    user,
    loginWithRedirect,
  } = useAuth0();
  const getToken = async () => {
    if (isAuthenticated && !isLoading && user) {
      try {
        setToken(await getAccessTokenSilently());
      } catch (e) {
        console.error("failed fetaching token", e);
      }
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  const [token, setToken] = useState("");
  useEffect(() => {
    !isAuthenticated && !isLoading && loginWithRedirect();

    let clear = window.setInterval(() => {
      getToken();
      console.log("token fetched ");
    }, 10000);
    return () => clearInterval(clear);
  }, [isLoading, isAuthenticated, user]);

  return (
    <>
      {isLoading && "logging you in"} {token} <br />
      <button onClick={getToken}>get access token</button>
      <br />
      {user ? (
        <div
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } });
            localStorage.clear();
          }}
        >
          click to logout : {user.email}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
