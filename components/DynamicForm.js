import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const DynamicForm = () => {
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleButtonPress = () => {
        setDisplayText(inputText);
        setInputText('');
    };

    return (
        <View>
            <TextInput
                value={inputText}
                onChangeText={setInputText}
                placeholder="Enter text"
            />
            <Button title="Submit" onPress={handleButtonPress} />
            <Text>{displayText}</Text>
        </View>
    );
};

export default DynamicForm;