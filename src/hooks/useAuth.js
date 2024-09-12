import { useEffect, useState } from 'react';


export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    console.log(token)

    if (token.length > 0) {
      setAuthenticated(true);
      console.log(authenticated)
    }

    setLoading(false);
  }, []);
  
  return { authenticated, loading };
}