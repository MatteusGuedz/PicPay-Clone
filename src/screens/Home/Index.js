import React from 'react'
import  { StyleSheet} from 'react-native'
import { Wrapper, Header, Balance, BalanceContainer, BalanceTitle, Container } from './styles'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import Suggestions from '../../components/Suggestions/Index'
import Activities from '../../components/Activities/Index'
import Tips from '../../components/Tips/Index'
import Banner from '../../components/Banner/Index'


export default function Home(){
    return (
       
        
        <Wrapper style={styles.container}>
         <Container> 
         <Header> 
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

                <BalanceContainer>
                    <BalanceTitle>Meu Saldo</BalanceTitle>
                    <Balance>R$ 0,00</Balance>
                </BalanceContainer>
            <AntDesign name="gift" size={30} color="#10c86e" />         
         </Header>

            <Suggestions />
            <Activities />
            <Tips />
            <Banner />

            </Container> 

        </Wrapper >
       
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
})