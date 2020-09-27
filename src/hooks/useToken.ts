import { useEffect, useState } from "react";

export function useToken() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);

    //setToken(url.searchParams.get("token");

    console.log(url.searchParams.get("token"));
  }, [token]);

  return [token];
}
