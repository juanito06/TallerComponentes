import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ToggleText = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View>
            <Button title="Toggle Text" onPress={toggleVisibility} />
            {isVisible && <Text>This text is visible when the button is pressed.</Text>}
        </View>
    );
};

export default ToggleText;