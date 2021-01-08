import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
    Text,
    StatusBar,
} from 'react-native';
import HabitItem from '../components/HabitItem';
import Constants from 'expo-constants';
import axios from 'axios';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

// const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Work Out',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Drink Water',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Pay Respect to HHLAB',
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HomeScreen = (props) => {
    useEffect(() => {
        // fetchArticles();
        fetchHabits();
    }, []); // by passing an empty array as parameter, it only works when mounted.

    const fetchHabits = () => {};

    const vacation = {
        key: 'vacation',
        color: 'red',
        selectedDotColor: 'blue',
    };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    const workout = { key: 'workout', color: 'green' };

    const { navigation } = props;
    const [habits, setHabits] = useState([]);

    const renderItems = ({ item }) => (
        <HabitItem
            id={item.id}
            title={item.title}
            onPress={() =>
                navigation.navigate('Habit', {
                    habitId: item.id,
                    habitTitle: item.title,
                })
            }
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Calendar
                markedDates={{
                    '2021-01-25': {
                        dots: [vacation, massage, workout],
                        selected: true,
                        selectedColor: 'red',
                    },
                    '2021-01-26': { dots: [massage, workout], disabled: true },
                }}
                markingType={'multi-dot'}
            />
            <FlatList
                data={DATA}
                renderItem={renderItems}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};
