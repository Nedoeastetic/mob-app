import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Task from './task';
const Stack = createStackNavigator();


export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.text}>NeuroApp</Text>
        <Text style={styles.textA} top={90} left={120}>Выберите задачу</Text>
        <View style={styles.minirectangle}  top={100} left={50}>
          <TouchableOpacity>
            <Text style={styles.buttonText} top={5}>решение{'\n'}задач
        </Text>
          
          </TouchableOpacity>
        </View>
        <View style={styles.minirectangle} top={60} left={128}>
          <TouchableOpacity>
            <Text style={styles.buttonText} top={5}>фото/{'\n'}видео</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.minirectangle} top={20} left={206}>
          <TouchableOpacity>
            <Text style={styles.buttonText} top={10}>общение</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.minirectangle} top={-20} left={284}>
          <TouchableOpacity>
            <Text style={styles.buttonText} top={10}>кодинг</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textB}>и   л   и</Text>
        <Text style={styles.textA} top={-15} left={120}>Воспользуйтесь поиском</Text>
        <View style={styles.longrectangle}>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchInput}
              fontSize={10}
              placeholder="Поиск..."
            />
          </View>
          <TouchableOpacity>
            <Image style={styles.imageB} source={require('./assets/Union.png')}/>
          </TouchableOpacity> 
        </View>
        <Image style={styles.imageA} source={require('./assets/Logo.png')}/>
        <StatusBar style="auto" />
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d16ee3',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#fff',
    top: 70,
    left: 106,
  },
  textA: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#fff',
  },
  textB: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#d16ee3',
    top: -15,
    left: 180,
  },
  rectangle: {
    width: '100%',
    height: 278,
    backgroundColor: '#400377',
    borderRadius: 47,
    top: -38,
  },
  minirectangle: {
    width: 77,
    height: 40,
    backgroundColor: '#220440',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#561b96',
  },
  longrectangle: {
    width: 257,
    height: 25,
    backgroundColor: '#220440',
    borderRadius: 6,
    top: -10,
    left: 50,
  },
  searchBarContainer: {
    flexDirection: 'row',
    width: 220,
    height: 19,
    backgroundColor: '#fff',
    borderRadius: 6,
    top: 3,
    left: 5,
  },
  searchInput: {
    flex: 1,
    height: 20,
    padding: 2,
  },
  imageA: {
    width: 46,
    height: 42,
    top: -210,
    left: 50,
  },
  imageB: {
    width: 15,
    height: 16,
    top: -14,
    left: 230,
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
});
