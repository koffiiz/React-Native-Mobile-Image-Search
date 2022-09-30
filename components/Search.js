import { useState,useContext } from 'react';
import {View, TextInput, StyleSheet, Button } from 'react-native';
import { ResultContext } from './ResultContext';

const Search = ({ navigation }) => {
    const [searchInput, onSearchInputChange] = useState("");

    const { fetchItems } = useContext(ResultContext)

    const searchImage = () => {
        fetchItems(searchInput, true)
        navigation.navigate('Results', {
            searchInput: searchInput
        })
    }

    return (
        <View>
            <TextInput
                placeholder="Search a picture."
                onChangeText={onSearchInputChange}
                value={searchInput}
                style={styles.searchBar}
            />

            <Button
                onPress={searchImage}
                title="Search"
                color="#0000ff"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})

export default Search;