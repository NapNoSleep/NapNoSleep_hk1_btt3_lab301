import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [data, setData] = useState([
    { key: '1', type: 'Vegetable', name: 'Apple', price: '28.00', image:{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8b135a6abd6f8468dcfdb8532d83db28'}, sl: 1 },
    { key: '2', type: 'Vegetable', name: 'Pear', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/748aac568836b5e17171cde3ee7a3920' }, sl: 2 },
    { key: '3', type: 'Vegetable', name: 'Coconut', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/06746a7452c4583005fe0c498d1a3f00'}, sl: 3 },
    { key: '4', type: 'Vegetable', name: 'Pear', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d291afe5cab64dfcace130c8a89a3175'}, sl: 1 },
    { key: '5', type: 'Vegetable', name: 'Coconut', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/204e8099bbdc0c938771d76af70c447c'}, sl: 1 },
    { key: '6', type: 'Vegetable', name: 'Coconut', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d92adc3df989ffa61a58e65c139e7ed6'}, sl: 4 },
    { key: '7', type: 'Vegetable', name: 'Pear', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d291afe5cab64dfcace130c8a89a3175'}, sl: 1 },

    { key: '8', type: 'Seafood', name: 'Seafood 1', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },
    { key: '9', type: 'Seafood', name: 'Seafood 2', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },
    { key: '10', type: 'Seafood', name: 'Seafood 3', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },
    { key: '11', type: 'Seafood', name: 'Seafood 4', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },
    { key: '12', type: 'Seafood', name: 'Seafood 5', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6d2a6d524b4f4e21d06edb43b1935503'} },
    { key: '13', type: 'Drink', name: 'Drink 1', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '14', type: 'Drink', name: 'Drink 2', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '15', type: 'Drink', name: 'Drink 3', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '16', type: 'Drink', name: 'Drink 4', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '17', type: 'Drink', name: 'Drink 5', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} },
    { key: '18', type: 'Drink', name: 'Drink 6', price: '28.00', image: {uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2ff76ee3d0cffca80b697041a76e051c'} }
  
  ]);

  const [type, setType] = useState('Vegetable');
  const [selectedBtn, setSelectedBtn] = useState('Vegetable');
  const [soluong, setSoluong] = useState(1);

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
          onPress={() => { navigation.navigate("Screen_02") }}>
        <Image source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/eccc9de86fdeec263f8ba1bf90a3fc77'}}
          style={{
            width: 25,
            height: 25,
          }}
        />
        </TouchableOpacity>
      </View>
    <View style={{
      width: '100%',
      justifyContent: 'center',
      height: 50,
      paddingHorizontal: 20,
    }}>
      <Text style={{ fontSize: 25, color: 'green', fontWeight: 'bold' }}>
        My Basket
      </Text>
      </View>
      <View>
      <FlatList
        data={
          ((data.filter((item) => item.type == type)))
        }
        renderItem={({ item }) => (
          <View style={{
            width: '100%',
            marginHorizontal: '2.5%',
            padding: 15,
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Image 
              source={item.image}
              style={{ width: 70, height: 70, marginRight: 10 }}
              resizeMode='contain'
            />
            <View>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'green' }}>
                {item.price}
              </Text>
              <Text style={{ fontSize: 18, color: 'silver' }}>
                {item.name}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e7d52d3d747f31a33b9c10ef87896d1d'}}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
                <Image
                  source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e7d52d3d747f31a33b9c10ef87896d1d'}}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
                <Image
                  source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e7d52d3d747f31a33b9c10ef87896d1d'}}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
                <Image
                  source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e7d52d3d747f31a33b9c10ef87896d1d'}}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
                <Image
                  source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e7d52d3d747f31a33b9c10ef87896d1d'}}
                  style={{ width: 15, height: 15, marginTop: 10 }}
                />
              </View>
            </View>
            <View style={{ marginLeft: 140, flexDirection: 'row', alignItems: 'center' }}>
            <Image
                        source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d07ace4cf419def05852c7cf0fdf9d34'}}
                        style={{ width: 15, height: 15, marginRight: 10 }}
                  />
                <Text style={{ fontSize: 15 }}>{item.sl}</Text>
            <Image
                        source={{uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b838f5b092f634657338b1b466dba8b8'}}
                        style={{ width: 15, height: 15, marginLeft: 10 }}
                  />
            </View>
          </View>
        )}
      />
    </View>
      <View style={{ justifyContent: 'center', width: '100%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
          <Text style={{ fontSize: 30 }}>Total</Text>
          <Text style={{ fontSize: 30 }}>$ 320.00</Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderRadius: 40,
            width: 240,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 90,
            marginVertical: 20,
          }}
            onPress={() => { navigation.navigate("Screen_02") }}
          >
            <Text style={{ fontSize: 20, color: 'white' }}>Payment</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Chỉnh đúng 'backgroundColor'
    alignItems: 'center',
    justifyContent: 'center',
  },
});

