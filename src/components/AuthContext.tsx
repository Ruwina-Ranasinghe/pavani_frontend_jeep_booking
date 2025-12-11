import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'tourist' | 'operator' | 'admin' | null;

interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string, role: UserRole) => void;
    logout: () => void;
    register: (name: string, email: string, password: string, role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, password: string, role: UserRole) => {
        // Mock login - in production this would validate against a backend
        setUser({
            id: Math.random().toString(36).substr(2, 9),
            name: email.split('@')[0],
            email,
            role,
        });
    };

    const register = (name: string, email: string, password: string, role: UserRole) => {
        // Mock registration
        setUser({
            id: Math.random().toString(36).substr(2, 9),
            name,
            email,
            role,
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
