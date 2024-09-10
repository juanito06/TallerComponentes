import React from 'react';
import { View, Text } from 'react-native';

const UserDetails = ({ nombre, edad, ocupacion }) => {
    return (
        <View>
            <Text>Nombre: {nombre}</Text>
            <Text>Edad: {edad}</Text>
            <Text>Ocupación: {ocupacion}</Text>
        </View>
    );
};

export default UserDetails;