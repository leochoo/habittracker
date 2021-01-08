import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

// function component
const HabitItem = ({ id, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                {/* <Text style={styles.title}>{id}</Text> */}
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HabitItem;
