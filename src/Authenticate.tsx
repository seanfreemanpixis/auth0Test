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
  const [token, setToken] = useState("");
  useEffect(() => {
    !isAuthenticated && !isLoading && loginWithRedirect();
    const getToken = async () => {
      if (isAuthenticated && !isLoading && user) {
        try {
          setToken(await getAccessTokenSilently());
        } catch (e) {
          console.error("failed fetaching token", e);
        }
      }
    };
    getToken();
  }, [isLoading, isAuthenticated, user]);

  return (
    <>
      {isLoading && "logging you in"} {token} <br />
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
