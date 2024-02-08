import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, ScrollView, Modal } from 'react-native';
import axios from 'axios';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Main = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [menu, setMenu] = useState([]);
  const [title, setTitle] = useState([]);
  const [contact, setContact] = useState([]);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://api.npoint.io/3f3b8d7e517ec130cba8';
        const menuItemResponse = await axios.get(apiUrl);
        setMenu(menuItemResponse.data.button);
        setTitle(menuItemResponse.data.text);
        setContact(menuItemResponse.data.Icon);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity
          style={{
            marginEnd: 10,
            height: windowWidth * 0.07,
            backgroundColor: 'gray',
            width: windowWidth * 0.07,
            borderRadius: windowWidth * 0.07,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}
          onPress={toggleAbout}
        >
          <Text style={{ color: 'gray', textAlign: 'center' }}>
            <Icon name="ellipsis-vertical-sharp" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showAbout}
        onRequestClose={toggleAbout}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, {marginTop:windowHeight*0.05, marginEnd:windowWidth*0.1, width:windowWidth*0.3, marginStart:windowWidth*0.6, height:windowHeight*0.07}]}>
            <TouchableOpacity onPress={()=>navigation.navigate('About')}>
              <Text style={{ color: 'black' }}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleAbout}>
              <Text style={{ color: 'red' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: windowHeight * 0.08 }}>
        <View style={{ position: 'absolute' }}></View>
        <Image source={require('../../../tugaskubunder.png')} style={{ width: windowWidth * 0.5, height: windowWidth * 0.5 }} />
        <Text style={{ color: 'black', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Tugasku</Text>
        <Text style={{ color: 'gray', textAlign: 'center', fontSize: 15 }}>{title}</Text>
        <View style={{ marginTop: 20 }}>
          {menu.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => { Linking.openURL(item.link) }} style={{ backgroundColor: '#F0F2EE', width: windowWidth * 0.8, height: windowHeight * 0.07, marginBottom: windowHeight * 0.02, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'black', }}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: 'row', }}>
          {contact.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => { Linking.openURL(item.link) }} style={{ margin: 5 }}>
              <Text style={{ color: 'black' }}>
                <Icon name={item.name} size={25} />
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
  },
});
