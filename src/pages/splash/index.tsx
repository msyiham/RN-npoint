import { StyleSheet, Text, View, Image, Dimensions, Animated, TouchableOpacity } from 'react-native'
import React, {useEffect, useRef} from 'react'

const Splash = ({navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(-50)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                slideAnim,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }
            )
        ]).start();
    }, [fadeAnim, slideAnim]);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../tugaskubunder.png')} style={{ width: windowWidth * 0.5, height: windowWidth * 0.5 }} />
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Selamat Datang</Text>
                <TouchableOpacity onPress={()=>navigation.replace('Main')} style={{width:windowWidth*0.5, height:windowHeight*0.05, backgroundColor:'#F0F2EE', justifyContent:'center', alignItems:'center', borderRadius:10, marginTop:20}}>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Masuk</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
})