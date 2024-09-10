import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageList from './ImageList'; 

const ImageGallery = () => {
    const [imageUrls, setImageUrls] = useState([
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Galería de Imágenes</Text>
            <ImageList images={imageUrls} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ImageGallery;
