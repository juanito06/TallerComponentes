import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1);
    };

    return (
        <View>
            <Button title="Click me" onPress={handlePress} />
            <Text>Button has been pressed {count} times</Text>
        </View>
    );
};

export default ClickCounter;