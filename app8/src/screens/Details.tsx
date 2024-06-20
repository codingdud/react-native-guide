import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

import { rootStackPramList } from '../App'

type DetalProps=NativeStackScreenProps<rootStackPramList,'Details'>
const Details = ({route}:DetalProps) => {
    const navigation=useNavigation<NativeStackNavigationProp<rootStackPramList>>()
    const product=route.params.product
    const star=new Array(5).fill('☆',0,5);
    for(let i=0;i<Math.floor(product.rating);i++){
        star[i]='★'
    }
  return (
    <ScrollView style={styles.container}>
      <View>
       <Image style={styles.image} source={{uri: product.imageUrl}} />
       <View>
        <Text style={styles.name}>{product.name}</Text>

        <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>{product.rating}★
                    {star.map((star, index) => (
                        <Text key={index}>{star}</Text>
                    ))}
                </Text>
            </View>
            <Text style={styles.ratingCount}>
                ({product.ratingCount.toLocaleString()})
            </Text>
            </View>
            
            <View style={[styles.rowContainer, styles.priceContainer]}>
                <Text style={styles.originalPrice}>
                    ₹{product.originalPrice.toLocaleString()}
                </Text>
                <Text style={styles.discountPrice}>
                    ₹{product.discountPrice.toLocaleString()}
                </Text>
                <Text style={styles.offerPercentage}>
                    %{product.offerPercentage} off
                </Text>
        </View>
        {product.tags.map((tag, index) => (
          <View key={index} style={styles.badge}>
            <Text style={styles.tagBadge}>{tag}</Text>
          </View>
        ))}
      </View>
     </View>
     <Text style={styles.description}>
     This is a detailed description of the product. 
     It highlights the key features and benefits, 
     providing potential customers with all the 
     information they need to make an informed purchasing 
     decision. The product is made from high-quality materials, 
     ensuring durability and longevity. Its innovative design 
     offers both functionality and style, making it a perfect 
     choice for consumers looking for reliability and elegance.
     </Text>
     <Button title='Back' onPress={()=>navigation.goBack()}/>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
    description: {
        fontSize: 16,
        color: '#666',
      },
    container: {
        paddingHorizontal: 18,
        backgroundColor: '#FFFFFF',
      },
      image: {
        width: 300,
        height: 450,
        resizeMode: 'contain',
      },
      rowContainer: {
        flexDirection: 'row',
      },
      name: {
        marginBottom: 4,
    
        fontSize: 20,
        fontWeight: '500',
      },
      ratingContainer: {
        marginVertical: 12,
      },
      priceContainer: {
        paddingVertical: 12,
        paddingHorizontal: 12,
    
        marginBottom: 12,
    
        borderRadius: 6,
        backgroundColor: '#deffeb',
      },
      rating: {
        marginRight: 4,
    
        borderRadius: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        backgroundColor: '#008c00',
      },
      ratingText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
      },
      ratingCount: {
        fontSize: 14,
        color: '#878787',
      },
      originalPrice: {
        fontSize: 18,
        fontWeight: '600',
        marginRight: 8,
    
        color: 'rgba(0, 0, 0, 0.5)',
        textDecorationLine: 'line-through',
      },
      discountPrice: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '600',
      },
      offerPercentage: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4bb550',
    
        marginRight: 8,
      },
      badge: {
        margin: 2,
        flexWrap: 'wrap',
        flexDirection: 'row',
      },
      tagBadge: {
        paddingVertical: 2,
        paddingHorizontal: 4,
    
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.5)',
    
        color: 'rgba(0, 0, 0, 0.8)',
      },
})