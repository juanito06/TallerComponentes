import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const RegistrationForm = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Validar los datos ingresados antes de pasarlos a App.js
        if (name && email && password) {
            onRegister({ name, email, password });
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    );
};

export default RegistrationForm;