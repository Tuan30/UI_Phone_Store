import { View, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import { useSelector } from 'react-redux'
import { ProductList } from '../../components'

const OrderScreen = () => {

  const cartItems = useSelector((state) => state.Cart.cart);

  const renderItem = ({item}) => {
    return <ProductList item={item} cart/>
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default OrderScreen