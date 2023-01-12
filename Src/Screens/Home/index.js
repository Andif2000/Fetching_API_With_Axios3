import { View, Text, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect, useState, version } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import axios from 'axios'
import { Rating } from 'react-native-ratings'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')
const Home = () => {
    const navigation = useNavigation();
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

    const renderData = ({ index, item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ItemDetails', {
                        name: item.title
                    })
                }}
                style={{
                    width: width / 2.2,
                    height: 270,
                    backgroundColor: '#fff',
                    margin: 2.5,
                    padding: 3,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: '#006400'
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        borderWidth: 2,
                        borderColor: '#556B2F'
                    }}>
                    <Image
                        source={{ uri: item.thumbnail }}
                        style={{ width: '100%', height: 185 }} />
                </View>
                <View
                    style={{ padding: 3 }}>
                    {
                        item.title.lenght < 20 ?

                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: 'bold'
                                }}>{item.title}</Text>
                            :
                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: 'bold'
                                }}>{item.title.substr(0, 20)}</Text>
                    }
                </View>
                <View>
                    <Rating
                        ratingCount={5}
                        imageSize={15}
                        startingValue={item.rating}
                        style={{ marginLeft: -85 }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '600',
                        textAlign: 'right',
                        paddingRight: 10
                    }}>Rp {item.price}K</Text>
            </TouchableOpacity>
        )
    }

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
            <View
                style={{
                    backgroundColor: '#099',
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: height - 55
                }}>
                <FlatList
                    data={data}
                    renderItem={renderData}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Home
