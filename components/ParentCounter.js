import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChildCounter from './ChildCounter'; // Asegúrate de tener este componente

const ParentCounter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Contador del Padre: {counter}</Text>
            <ChildCounter counter={counter} incrementCounter={incrementCounter} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    counterText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default ParentCounter;
