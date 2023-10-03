
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import Home from './src/Views/Home';
function App() {
  return (
      <SafeAreaView style={styles.container}>
            <Home></Home>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
 
  },
});


export default App;