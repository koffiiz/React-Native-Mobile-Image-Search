import { useState, useContext} from 'react';
import {FlatList, SafeAreaView, Image, View, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { ResultContext } from './ResultContext';

const Results = ({navigation, route}) => {
    const [page, setPage] = useState(2);

    const { items, fetchItems } = useContext(ResultContext);
    const { searchInput } = route.params;

    const ImageCard = ({ item }) => (
        <TouchableWithoutFeedback 
        onPress={ () => navigation.navigate('Details', {
            imageSrc: item.webformatURL,
            author: item.user,
            authorImage: item.userImageURL,
            keywords: item.tags 
        })} 
        >
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={{
                    uri: item.webformatURL,
                }}
            />
            </View>
        </TouchableWithoutFeedback>
    );

    const FetchImage = () => {
        setPage((prevState) => (prevState + 1))
        fetchItems(searchInput, false, page )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={ items }
                renderItem={ImageCard}
                keyExtractor={item => item.id}
                onEndReachedThreshold={0.1}
                onEndReached={FetchImage}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    image: {
      width: '100%',
      height: 300,
    }
  });

export default Results;