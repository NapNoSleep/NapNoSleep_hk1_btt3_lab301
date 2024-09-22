import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text
          style={{
            color: 'green',
            fontSize: 30,
            fontWeight: 'bold',
          }}>Order your favorite!</Text>
      </View>
      <View style={styles.style2}>
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'}}
          style={{ width: 150, height: 150, marginLeft: 215, }}
        />
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'}}
          style={{ width: 150, height: 150, marginLeft: 20, marginTop: -25 }}
        />
        <Image source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ca3b29c6184cd3bb1c167e9187d7a64d'}}
          style={{
            width: 150,
            height: 150,
            marginTop: 30,
            marginLeft: 200,
          }}
        />
      </View>

      <View style={styles.style3}>
        <TouchableOpacity style={{
            backgroundColor: 'green',
            borderRadius: 40,
            width: 240,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {navigation.navigate('Screen_02')}}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  style1: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  style2: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  style3: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
