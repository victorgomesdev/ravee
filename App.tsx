import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import LoginForm from './components/LoginForm'

export default function App(){
    return(
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', width: '100%', height: "100%"}}>
            <LoginForm/>
        </View>
    )
}