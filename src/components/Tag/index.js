import { StyleSheet, Dimensions, Text, ScrollView, FlatList, View, TouchableOpacity } from 'react-native';
import { Button, Chip } from 'react-native-paper';
import { useState } from 'react';
import { obterTags } from '../../services/Chapter/';
import { useNavigation } from '@react-navigation/native';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity key={item.key} onPress={onPress} style={[styles.item]}>
        <Chip style={styles.tag} mode="outlined" onPress={() => console.log(item.text)}>
            <Text style={[styles.label]}>
                {item.text}
            </Text>
        </Chip>
    </TouchableOpacity>
);

export default function Tag() {
    const navigation = useNavigation();

    const [selectedId, setSelectedId] = useState(null);
    const [tags, setTags] = useState(null);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    const questions = () => {
        if (tags == null) {
            setTags(obterTags());
        }

        return tags;
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleTop}>Mais pesquisados</Text>
            <FlatList
                horizontal
                data={(() => tags ?? questions())()}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width * 0.90,
        marginTop: 8,
        paddingBottom: 8,
        height: 75
    },
    tag: {
        marginEnd: 5,
        borderRadius: 6,
    }
});
