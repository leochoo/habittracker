import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ClipScreen = ({ route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>clip screen</Text>
        </SafeAreaView>
    );
};
