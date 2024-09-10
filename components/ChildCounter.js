import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildCounter = ({ counter, incrementCounter }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Contador del Hijo: {counter}</Text>
            <Button title="Incrementar Contador" onPress={incrementCounter} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
    },
    counterText: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ChildCounter;
