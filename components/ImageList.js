import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageList = ({ images }) => {
    return (
        <View style={styles.container}>
            {images.map((url, index) => (
                <Image
                    key={index}
                    source={{ uri: url }}
                    style={styles.image}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
});

export default ImageList;
