import { useQuery } from "@tanstack/react-query";

async function fetchUser() {
  const response = await fetch('/api/auth/user', {
    credentials: 'include',
  });
  
  if (!response.ok) {
    if (response.status === 401) {
      return null;
    }
    throw new Error('Failed to fetch user');
  }
  
  return response.json();
}

export function useAuth() {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["/api/auth/user"],
    queryFn: fetchUser,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  return {
    user: user ?? null,
    isLoading,
    isAuthenticated: !!user,
    error,
  };
}
