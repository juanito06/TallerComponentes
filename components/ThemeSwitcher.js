import React, { useState } from 'react';
import { View, Button } from 'react-native';

const ThemeSwitcher = ({ onThemeChange }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        onThemeChange(newTheme);
    };

    return (
        <View>
            <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
    );
};

export default ThemeSwitcher;