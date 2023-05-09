import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import LFStyle from '../styles/LoginFormStyle'

export default function LoginForm() {
    return (
        <View style={LFStyle.container}>
            <TouchableWithoutFeedback style={LFStyle.dismissContainer} onPress={() => Keyboard.dismiss()}>
                <View style={LFStyle.innerContainer}>
                    <Text style={LFStyle.loginTitle}>Login</Text>
                    <TextInput placeholder='Usuário'
                        placeholderTextColor={'#844AAA'}
                        style={LFStyle.placeholder}></TextInput>
                    <TextInput placeholder='Senha'
                        placeholderTextColor={'#844AAA'}
                        style={LFStyle.placeholder}></TextInput>
                    <TouchableHighlight style={LFStyle.loginButtom}
                        onPress={() => { }}
                        underlayColor={'#9D9D9D'}
                        activeOpacity={1}
                    >
                        <Text style={LFStyle.loginButtomText}>Entrar</Text>
                    </TouchableHighlight>
                </View>
            </TouchableWithoutFeedback>
            <Text style={LFStyle.ou}>ou</Text>
            <TouchableHighlight
            style={LFStyle.createAccount}
                onPress={() => { }}
                underlayColor={'#9D9D9D'}
                activeOpacity={1}>
                <Text style={LFStyle.ou}>Criar Conta</Text>
            </TouchableHighlight>
            <Text style={LFStyle.appName}>
                Ravee
            </Text>
        </View>
    )
}