import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import ClipButton from '../components/ClipButton';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HabitScreen = ({ route }) => {
    const { habitId } = route.params;
    console.log(habitId);
    const { habitTitle } = route.params;

    // const dispatch = useDispatch();

    // const user = useSelector((state) => state.user);
    // const { clips } = user;
    // const isClipped = () => {
    //     return clips.some((clip) => clip.url === article.url);
    // };

    // const toggleClip = () => {
    //     if (isClipped()) {
    //         dispatch(deleteClip({ clip: article }));
    //     } else {
    //         dispatch(addClip({ clip: article }));
    //     }
    // };

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>{habitId}</Text> */}
            <Text>{habitTitle}</Text>
        </SafeAreaView>
    );
};
