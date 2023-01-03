import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import axios from 'axios'

const { width, height } = Dimensions.get('window')
const Home = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/products');
            console.log(res.data.products);
            setData(res.data.products)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View>
            <View
                style={{
                    height: height / 14,
                    backgroundColor: '#008080',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        style={{ paddingHorizontal: 5 }}>
                        <Ionicons
                            name='menu'
                            size={45}
                            style={{ color: '#fff' }} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 23,
                            fontWeight: 'bold',
                            letterSpacing: 1.5,
                            marginLeft: 10
                        }}>Andif20 Cell</Text>
                </View>
                <TouchableOpacity
                    style={{ marginRight: 10 }}>
                    <Ionicons
                        name='search'
                        size={35}
                        style={{ color: '#fff' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home