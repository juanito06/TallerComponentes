import React from 'react';
import { Button, Alert } from 'react-native';

const AlertButton = ({ message }) => {
    const showAlert = () => {
        Alert.alert('Mensaje', message);
    };

    return (
        <Button title="Mostrar Alerta" onPress={showAlert} />
    );
};

export default AlertButton;