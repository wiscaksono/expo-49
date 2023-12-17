import { useSegments, useRouter } from 'expo-router'
import { createContext, useContext, useEffect, useState } from 'react'

export type User = {
  email: string
  password: string
}

type AuthType = {
  user: User | null
  setUser: (user: User | null) => void
}

const AuthContext = createContext<AuthType>({
  user: null,
  setUser: () => { }
})

export const useAuth = () => useContext(AuthContext)

function useProtectedRoute(user: User | null) {
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    const inAuthGroup = segments[0] === 'auth'

    if (!user && !inAuthGroup) {
      router.replace('/auth/started')
    }

    if (user && inAuthGroup) {
      router.replace('/dashboard/home/')
    }
  }, [user, segments])
}

export function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [user, setUser] = useState<User | null>({
    email: 'wwicaksono96@gmail.com',
    password: 'Wisnuajjh123'
  })

  useProtectedRoute(user)

  const authContext: AuthType = {
    user,
    setUser
  }

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
}
