import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GuessForm from './GuessForm';

const Game = () => {
    const [correctAnswer, setCorrectAnswer] = useState('42'); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Juego de Adivinanza</Text>
            <GuessForm correctAnswer={correctAnswer} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Game;
