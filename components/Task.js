import React from 'react';
import { View, Text } from 'react-native';

const Task = ({ task }) => {
    return (
        <View>
            <Text>{task.title}</Text>
            <Text>{task.completed ? 'Completada' : 'Pendiente'}</Text>
        </View>
    );
};

export default Task;