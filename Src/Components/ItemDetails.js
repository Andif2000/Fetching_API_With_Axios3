import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ItemDetails = ({ route }) => {
    const navigation = useNavigation();
    // const { title } = route.params; 
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default ItemDetails