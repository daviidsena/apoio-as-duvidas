import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import { obterChapters } from '../../services/Chapter/';

const renderTag = (item) => {
    const listTag = item.map((data, idx) => {
        return (
            <TouchableOpacity key={idx}>
                <Chip style={styles.tag} mode="outlined"
                    onPress={() => console.log(data)}>
                    <Text style={styles.tagText}>
                        {data}
                    </Text>
                </Chip>
            </TouchableOpacity>
        )
    });

    return listTag;
}

const Item = ({ item, onPress }) => (
    <TouchableOpacity key={item.key} onPress={onPress} style={[styles.item]}>
        <Text style={[styles.title]}>{item.title}</Text>
        <View style={styles.containerTag}>
            {item.tags != null ? renderTag(item.tags) : ''}
        </View>
        <View style={styles.iconContainer}>
            <Text style={styles.iconDatas}>
                {item.comments} <Icon name="comments" size={12} />
            </Text>

            <Text style={styles.iconDatas}>
                {item.views} <Icon name="eye" size={12} />
            </Text>

            <Text style={styles.iconDatas}>
                {" "}
                <Icon name="thumbs-down" size={12} />
            </Text>

            <Text style={styles.iconDatas}>
                {item.like} <Icon name="thumbs-up" size={12} />
            </Text>
        </View>
    </TouchableOpacity>
);

export default function List() {
    const [itens, setItens] = useState(null);

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => {
                }}
                keyExtractor={(item) => item.key}
            />
        );
    };

    const questions = async () => {
        if (itens == null) {
            setItens(await obterChapters());
        }
        return itens;
    }

    return (
        <FlatList style={styles.container}
            data={(() => itens ?? questions())()}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    item: {
        padding: 16,
        marginVertical: 3,
        marginHorizontal: 16,
        borderRadius: 5,
        minHeight: 75,
        backgroundColor: '#F7F7F7'
    },
    tag: {
        marginRight: 2,
        marginBottom: 2,
        marginTop: 2,
        borderRadius: 6,
    },
    containerTag: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Roboto'
    },
    label: {
        height: 15,
    },
    tagText: {

    },
    iconContainer: {
        paddingTop: 20,
        flexDirection: 'row-reverse',
    },
    iconDatas: {
        padding: 5
    },
});