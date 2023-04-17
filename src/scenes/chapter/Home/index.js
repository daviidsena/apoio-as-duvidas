import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';

import Search from '../../../components/Search'
import Tag from '../../../components/Tag'
import List from '../../../components/List'

const Home = ({ modules }) => {
    return (
        <View style={styles.container}>
            <Search />
            <Tag />
            <List />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default connect(state => ({ modules: state }))(Home);