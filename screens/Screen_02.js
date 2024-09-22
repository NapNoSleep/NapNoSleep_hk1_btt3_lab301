import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App({ navigation }) {
  const [data, setData] = useState([
    { key: '1', type: 'Vegetable', name: 'Apple', price: '28.80', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8b135a6abd6f8468dcfdb8532d83db28'} },
    { key: '1', type: 'Vegetable', name: 'Pear', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/748aac568836b5e17171cde3ee7a3920' } },
    { key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/06746a7452c4583005fe0c498d1a3f00'} },
    { key: '1', type: 'Vegetable', name: 'Pear', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d291afe5cab64dfcace130c8a89a3175'} },
    { key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/204e8099bbdc0c938771d76af70c447c'} },
    { key: '1', type: 'Vegetable', name: 'Coconut', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d92adc3df989ffa61a58e65c139e7ed6'} },

    { key: '1', type: 'Seafood', name: 'Seafood 1', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },
    { key: '1', type: 'Seafood', name: 'Seafood 2', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },
    { key: '1', type: 'Seafood', name: 'Seafood 3', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },
    { key: '1', type: 'Seafood', name: 'Seafood 4', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },
    { key: '1', type: 'Seafood', name: 'Seafood 5', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },

    { key: '1', type: 'Drink', name: 'Drink 1', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '1', type: 'Drink', name: 'Drink 2', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '1', type: 'Drink', name: 'Drink 3', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '1', type: 'Drink', name: 'Drink 4', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '16', type: 'Drink', name: 'Drink 5', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '17', type: 'Drink', name: 'Drink 6', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} }
  ])

  const [type, setType] = useState('Vegetable');
  const [selectedBtn, setSelectedBtn] = useState('Vegetable');
  const [initialItemCount, setInitialItemCount] = useState(0);
  return (
    <ScrollView stickyHeaderIndices={[0]}style={style.container}>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
      }}>
        <TouchableOpacity
          onPress={() => { navigation.navigate("Screen_01")}}
        >
        <Image source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/eccc9de86fdeec263f8ba1bf90a3fc77'}}
          style={{
            width: 25,
            height: 25,
          }}
        />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { navigation.navigate("Screen_03") }}>
        <Image source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2a908b6ddf4c9ed01d5aebcb4042b764'}}
          style={{
            width: 25,
            height: 25,
          }}
        />
        </TouchableOpacity>

        </View>
        <View style={{
          width: '100%',
        }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              width: '90%',
              height: 50,
              alignSelf: 'center',
              marginTop: 20,
              paddingLeft: 20,
              fontSize: 20,
          }}
          placeholder='Search'
        />

      </View>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
      }}>
        <TouchableOpacity style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 40,
          backgroundColor: type == 'Vegetable' ? 'green' : 'white',
        }}
        onPress={() => {
          setType('Vegetable');
          setInitialItemCount(6);
        }}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'blue',
          }}>Vegetable</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 40,
          backgroundColor: type == 'Seafood' ? 'green' : 'white',
      }}
      onPress={() => {setType('Seafood');
      setInitialItemCount(6);
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'blue',
        }}>
          Seafood
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 40,
        backgroundColor: type == 'Drink' ? 'green' : 'white',
      }}
      onPress={() => {
        setType('Drink');
        setInitialItemCount(6);
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'blue',
        }}>
          Drinks
        </Text>
      </TouchableOpacity>

      </View>
      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          marginTop: 20,
      }}><Text style={{ fontSize: 25, color: 'green' }}>Order your favorite</Text>

      <TouchableOpacity
        onPress={() => {setInitialItemCount(data.length);
        }}
      >
        <Text style={{ fontSize: 25, color: 'pink' }}>See all</Text>
      </TouchableOpacity>
      </View>

      <FlatList
      data={((data.filter((item) => item.type == type))).slice(0, initialItemCount)}
      renderItem={({ item }) => (
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '45%',
          marginHorizontal: '2.5%',
          marginVertical: 10,
          padding: 15,
        }}>
          <TouchableOpacity
            onPress={() => { navigation.navigate("Screen_03") }}
          >
            <Image source={item.image}
              style={{ width: 150, height: 150 }}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
        </View>
      )}
      numColumns={2}
    />
  </ScrollView>
);
}


const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundClolor:'#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
});

