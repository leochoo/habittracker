import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import axios from 'axios';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HomeScreen = (props) => {
    const { navigation } = props;

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles();
    }, []); // by passing an empty array as parameter, it only works when mounted.

    const fetchArticles = async () => {
        try {
            const response = await axios.get(URL);
            setArticles(response.data.articles);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const vacation = {
        key: 'vacation',
        color: 'red',
        selectedDotColor: 'blue',
    };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    const workout = { key: 'workout', color: 'green' };

    return (
        <SafeAreaView style={styles.container}>
            <Calendar
                markedDates={{
                    '2020-12-25': {
                        dots: [vacation, massage, workout],
                        selected: true,
                        selectedColor: 'red',
                    },
                    '2020-12-26': { dots: [massage, workout], disabled: true },
                }}
                markingType={'multi-dot'}
            />
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        onPress={() =>
                            navigation.navigate('Article', {
                                article: item,
                            })
                        }
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};
