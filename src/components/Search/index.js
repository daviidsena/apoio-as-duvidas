import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = (query) => {
        setSearchQuery(query);
    }

    const onChangeSearc22h = (query) => {
        console.log(query);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                placeholder="Pesquisar"
                onChangeText={onChangeSearch}
                onSubmitEditing={onChangeSearc22h}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width * 0.90,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 8,
        marginBottom: 5
    },
});
