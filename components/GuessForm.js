import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GuessForm = ({ correctAnswer }) => {
    const [guess, setGuess] = useState('');
    const [result, setResult] = useState('');

    const handleGuess = () => {
        if (guess.trim() === correctAnswer) {
            setResult('¡Correcto!');
        } else {
            setResult('Incorrecto, intenta de nuevo.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.prompt}>Adivina la respuesta:</Text>
            <TextInput
                style={styles.input}
                value={guess}
                onChangeText={setGuess}
                placeholder="Escribe tu adivinanza"
            />
            <Button title="Enviar" onPress={handleGuess} />
            {result && <Text style={styles.result}>{result}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 20,
    },
    prompt: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        width: 200,
        marginBottom: 10,
    },
    result: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default GuessForm;
