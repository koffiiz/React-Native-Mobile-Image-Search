import { useContext } from 'react';
import { Text, View, Image, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { ResultContext } from './ResultContext';

const Details = ({ navigation, route }) => {
    const { imageSrc, author, authorImage, keywords } = route.params;

    const { fetchItems } = useContext(ResultContext)

    const keywordArray = keywords.split(',')

    const searchTags = (searchInput) => {
        fetchItems(searchInput, true)
        navigation.navigate('Results', {
            searchInput: searchInput
        })
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: imageSrc,
                }}
            />
            <View style={styles.authorContainer}>
                <Image
                    style={styles.authorImage}
                    source={{
                        uri: authorImage ? authorImage : "https://gravatar.com/avatar/049f0ed052ab4d6e5170666d4c61ac3d?s=400&d=robohash&r=x",
                    }}
                />
                <View style={styles.authorDetails}>
                    <Text> Author: {author} </Text>
                    <SafeAreaView >
                        <Text> Tags: </Text>
                        <FlatList
                            data={keywordArray}
                            renderItem={({ item, index }) => {
                                return (
                                    <Text style={styles.tags} onPress={() => searchTags(item.trim())}> {item.trim()} </Text>
                                )
                            }}
                            keyExtractor={(item) => item}
                            horizontal
                        />
                    </SafeAreaView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    authorContainer: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
    },
    authorImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    authorDetails: {
        marginLeft: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    tags: {
        color: "#0000FF"
    }
});

export default Details;