import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function ChapterPergunta() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça sua pergunta</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.item}>
                    <Text>Título</Text>

                    <TextInput />
                </View>
                <View style={styles.item}>
                    <Text>Descrição</Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor="grey"
                        numberOfLines={6}
                        multiline={true}
                        style={styles.textArea}
                    />
                </View>
                <View style={styles.item}>
                    <Text>Chapter</Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor="grey"
                        style={styles.textArea}
                    />
                </View>
                <View style={styles.item}>
                    <Text>Tags</Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor="grey"
                        style={styles.textArea}
                    />
                </View>

                <Button style={styles.btn} mode="contained">Perguntar</Button>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    textArea: {
        backgroundColor: "white",
        marginVertical: 10,
        textAlignVertical: 'top'
    },
    item: {
        padding: 16,
        marginVertical: 3,
        borderRadius: 5,
        minHeight: 75,
        backgroundColor: '#F7F0F7',
        width: Dimensions.get('screen').width * 0.90,
    },
    title: {
        width: Dimensions.get('screen').width * 0.90,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10
    },
    btn: {
        marginVertical: 10
    }
});