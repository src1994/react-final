import { useEffect, useState } from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type Theme = 'dark' | 'light';

type UseThemeReturn = [Theme, (e: ChangeEvent) => void];

export const useTheme = (initialTheme: Theme): UseThemeReturn => {
    const [theme, setTheme] = useState<Theme>(initialTheme);

    const handleChange = (e: ChangeEvent) => {
        const newTheme: Theme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, handleChange];
};
