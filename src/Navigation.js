import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'

import PayButton from './components/PayButton/Index'

import HomeScreen from './screens/Home/Index'
import WalletScreen from './screens/Wallet/Index'
import PayScreen from './screens/Pay/Index'
import SettingScreen from './screens/Setting/Index'
import NotificationScreen from './screens/Notification/Index'

const Tab = createBottomTabNavigator();


const icons = {
    Home:{
        lib: AntDesign,
        name: 'home',
    },

    Wallet:{
        lib: AntDesign,
        name: 'creditcard',
    },


    Notfications:{
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },

    Settings:{
        lib: AntDesign,
        name: 'setting',
    }
}
export default function Navigation(){
    return (
        

        
 <Tab.Navigator 
    initialRouteName="Wallet"
    screenOptions={({ route, navigation })=>({
                tabBarIcon: ({color, size, focused}) => {
                    if(route.name == 'Pay'){
                            return (
                            <PayButton 
                             onPress={() => navigation.navigate('Pay')}
                             focused={focused}
                            />
                            )
                    }
                    const {lib: Icon, name} = icons[route.name]
                    return <Icon name={name} size={size} color={color}/>
                }})}

    tabBarOptions={{
        style:{
            backgroundColor:'#131418',
            borderTopColor: 'rgba(255, 255, 255, 0.2)'
        },
        
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c'
    }}>

<Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                    
                }}
                />
             <Tab.Screen 
                name="Wallet" 
                component={WalletScreen}
                options={{
                    title: 'Carteira'
                }}
                />

            <Tab.Screen 
                name="Pay" 
                component={PayScreen}
                options={{
                    title: ''
                }}
                />

            <Tab.Screen 
                name="Notfications" 
                component={NotificationScreen}
                options={{
                    title: 'Notificações'
                }}/>

            <Tab.Screen 
                name="Settings" 
                component={SettingScreen}
                options={{
                    title: 'Ajustes'
                }}/>
        </Tab.Navigator>
    )
}


