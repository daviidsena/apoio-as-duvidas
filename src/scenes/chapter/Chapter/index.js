import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { obterChapterComentario } from '../../../services/Chapter';
import Search from '../../../components/Search';
import { Button, Chip } from 'react-native-paper';

const Item = ({ item, onPress, index, size }) => (
    <>
        <SafeAreaView key={item.key} onPress={onPress} style={[styles.item]}>
            <View style={styles.infoContainer}>
                <View>
                    <Chip mode="outlined" onPress={() => console.log(item.author)}>
                        <Text style={styles.infoAuthor}>
                            {item.author}
                        </Text>
                    </Chip>
                </View>

                <Text style={styles.infoTimestamp}>
                    {item.timestamp}
                </Text>
            </View>
            <Text style={[styles.title]}>{item.title}</Text>

            <Text style={[styles.subject]}>{item.subject}</Text>

            {
                index == 0 ?
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
                    : <></>
            }

        </SafeAreaView>

        {
            index == size - 1 ?
                <View style={[styles.item]}>
                    <Text>Escreva seu comentário</Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor="grey"
                        numberOfLines={6}
                        multiline={true}
                        style={styles.textArea}
                    />
                    <Button mode="contained">Enviar</Button>
                </View>
                : <></>
        }
    </>

);

export default function Chapter() {
    const [itens, setItens] = useState(null);

    const renderItem = ({ item, index }) => {
        return (
            <Item
                item={item}
                onPress={() => {
                    console.log('clicou')
                }}
                index={index}
                size={itens.length}
                keyExtractor={(item) => item.key}
            />
        );
    };

    const questions = () => {
        if (itens == null) {
            setItens(obterChapterComentario());
        }

        return itens;
    }

    return (
        <View style={styles.container}>
            <Search />
            <FlatList
                data={(() => itens ?? questions())()}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textAreaContainer: {
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        backgroundColor: "white",
        marginVertical: 10,
        padding: 20,
        textAlignVertical: 'top'
    },
    item: {
        padding: 16,
        marginVertical: 3,
        marginHorizontal: 14,
        borderRadius: 5,
        minHeight: 75,
        backgroundColor: '#F7F0F7'
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
        fontFamily: 'Roboto',
        marginBottom: 10
    },
    label: {
        height: 15,
    },
    iconContainer: {
        paddingTop: 20,
        flexDirection: 'row-reverse',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    iconDatas: {
        padding: 5,
    },
    infoTimestamp: {
        padding: 5,
    }
});