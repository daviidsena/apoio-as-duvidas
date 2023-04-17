import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import Home from './src/scenes/chapter/Home';
import Chapter from './src/scenes/chapter/Chapter';
import ChapterPergunta from './src/scenes/chapter/ChapterPergunta';

import store from './src/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Chapter">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animation: 'slide_from_right' }} />
          <Stack.Screen name="Chapter" component={Chapter} options={{ headerShown: false, animation: 'slide_from_right' }} />
          <Stack.Screen name="ChapterPergunta" component={ChapterPergunta} options={{ headerShown: false, animation: 'slide_from_right' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}