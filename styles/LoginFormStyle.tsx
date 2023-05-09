import { StyleSheet } from "react-native"
const LFStyle = StyleSheet.create({
    container:{
        display: "flex",
        width: 350,
        height: 350,
        backgroundColor: '#F1EFEF',
        borderRadius: 15,
        flexDirection: 'column',
    },
    loginTitle:{
        color: '#844AAA',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20
    },
    dismissContainer:{
        width: '100%',
        height: '100%'
    },
    placeholder:{
        width: '80%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#844AAA',
        padding: 2
    },
    innerContainer:{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    loginButtom:{
        alignSelf: 'center',
        width: '50%',
        height: '15%',
        borderRadius: 10
    },
    loginButtomText:{
        color: '#844AAA',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    ou:{
        textAlign: 'center',
        color: 'black',
        padding: 10
    },
    createAccount:{
        width: '60%',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '10%'
    },
    appName:{
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '30%'
    }
})

export default LFStyle