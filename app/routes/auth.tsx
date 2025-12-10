import React from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";

const auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading, auth, init } = usePuterStore();
  console.log(auth.isAuthenticated);
  const next = location.search.split("?redirect=")[1];

  useEffect(() => {
    init();
    console.log("is loading", isLoading);
  }, [init]);

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover flex items-center justify-center">
      <div className="shadow-lg gradient-border">
        <section className="flex flex-col items-center bg-white rounded-2xl gradient-border ">
          <div className=" flex flex-col justify-center items-center gap-2 p-2">
            <h1>Welcome</h1>
            <h2>Log in to continue your job journey</h2>
          </div>
          <div className="p-2">
            {isLoading ? (
              <button className="auth-button w-full animate-pulse">
                Signing you in...
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button w-full" onClick={auth.signOut}>
                    Sign out
                  </button>
                ) : (
                  <button className="auth-button w-full" onClick={auth.signIn}>
                    Sign in
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
