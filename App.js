import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Src/Screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemDetails from './Src/Components/ItemDetails';

export default function App() {
  const Stack = createNativeStackNavigator(
    {
      Home: Home,
      ItemDetails: ItemDetails
    }
  );
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar backgroundColor='#008080' />
        <Home />
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }
          }>
          <Stack.Screen name='ItemDetails' component={ItemDetails} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
