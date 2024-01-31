import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export const Authenticate = () => {
  const { isAuthenticated, logout, isLoading, user, loginWithRedirect } =
    useAuth0();
  useEffect(() => {
    !isAuthenticated && !isLoading && loginWithRedirect();
  }, [isLoading, isAuthenticated]);
  return (
    <>
      {isLoading && "logging you in"}{" "}
      {user ? (
        <div
          onClick={() => {
            logout();
            localStorage.clear();
          }}
        >
          {" "}
          click to logout : {user.email}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
