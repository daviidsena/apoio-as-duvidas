import { URL } from '@env';
import { faker } from '@faker-js/faker';

const endpoint = `${URL}/chapter/`;

function obterChapters() {
    var lista = [];

    for (let index = 0; index < 15; index++) {
        var tags = [];

        for (let j = 0; j < 3; j++) {
            tags.push(faker.name.jobType());
        }

        var item = {
            id: faker.datatype.uuid(),
            key: index,
            title: faker.lorem.sentence(),
            author: faker.name.firstName(),
            tags,
            views: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 10),
            like: Math.floor(Math.random() * 100),
            unlike: Math.floor(Math.random() * 100)
        };

        lista.push(item);
    }

    return lista;
}

function obterTags() {
    const DATA = [
        { key: 1, text: 'Java' },
        { key: 2, text: 'PHP' },
        { key: 3, text: 'C#' },
        { key: 4, text: 'JS' },
        { key: 5, text: 'Oracle' },
        { key: 6, text: 'Postgres' },
        { key: 7, text: 'SQL' },
        { key: 8, text: 'DB' },
        { key: 9, text: 'AWS' },
        { key: 10, text: 'Azure' }];

    return DATA;
}

function obterChapterComentario(id) {
    var lista = [];

    for (let index = 0; index < 5; index++) {
        var tags = [];

        for (let j = 0; j < 3; j++) {
            tags.push(faker.name.jobType());
        }

        var item = {
            id: faker.datatype.uuid(),
            key: index,
            title: faker.lorem.sentence(),
            subject: faker.lorem.sentence(),
            author: faker.name.firstName(),
            tags,
            views: Math.floor(Math.random() * 100),
            like: Math.floor(Math.random() * 100),
            unlike: Math.floor(Math.random() * 100),
            timestamp: "30 min"
        };

        lista.push(item);
    }

    return lista;
}

export {
    obterChapters, obterTags, obterChapterComentario
}

// await fetch(endpoint)
//     .then(resposta => resposta.json())
//     .then(json => {
//         list = json;
//     })
//     .catch(() => {
//         Alert.alert('Erro', 'N');
//     });
