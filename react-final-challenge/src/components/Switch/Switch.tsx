import { useTheme } from "../../Hooks/DarkModeHook/UseTheme";

export const Switch = () => {
    const [theme, handleChange] = useTheme('dark');

    return (
        <div className="container-switch">
            <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={handleChange} 
                    checked={theme === 'dark'} 
                    aria-label="Toggle Dark Mode" 
                />
                <span className="slider"></span>
            </label>
        </div>
    );
}
