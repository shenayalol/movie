import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import movies from './screens/movies'
import description from './screens/description'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={movies} />
      <Stack.Screen name="description" component={description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}