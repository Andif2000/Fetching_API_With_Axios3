import { View, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState, version } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import axios from 'axios'
import { Rating, AirbnbRating } from 'react-native-ratings'

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

    const renderData = ({ index, item }) => {
        return (
            <View
                style={{
                    width: width / 2.2,
                    height: 250,
                    backgroundColor: '#fff',
                    margin: 2.5
                }}>
                <View>
                    <Text>{item.id}</Text>
                </View>
            </View>
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
                />
            </View>
        </View>
    )
}

export default Home
{/* <Rating
                // type='start'
                ratingCount={10}
                imageSize={30}
                minValue={data.rating}
            /> */}