import { Text, View, TextInput, Image, TouchableOpacity, ScrollView, AsyncStorage } from "react-native"
import axios from "axios"
import { baseUrl } from "../index"
import { useEffect, useState } from "react"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // console.log("Ya Allah madad")


    function loginUser() {
        axios.post(`${baseUrl}/login`, {
            email: email,
            password: password
        }).then(res => {
            navigation.navigate("DiscountStore")
        }).catch(e => {
            console.log("catch", e)
            alert(e)
        })
    }
    return (
        <ScrollView>
            <View style={{ height: 840, alignItems: "center" }}>
                <View style={{ flex: .3, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#61B846", fontSize: 30, fontWeight: "bold" }}>SAYLANI WELFARE</Text>
                    <Text style={{ color: "#024F9D", fontSize: 15, fontWeight: "bold" }}>ONLINE DISCOUNT STORE</Text>
                </View>
                <View>
                    <Text>Login to your account</Text>
                </View>
                <View style={{ flex: .4, justifyContent: "center" }}>
                    <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TextInput placeholder="Email" style={{ width: 250 }} onChangeText={e => setEmail(e)} />
                        <Image
                            source={require("../assets/Emailicon.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                    <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TextInput placeholder="Password" style={{ width: 250 }} onChangeText={e => setPassword(e)} />
                        <Image
                            source={require("../assets/Passwordicon.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => loginUser()} style={{ backgroundColor: "#61B846", paddingVertical: 20, paddingHorizontal: 100, borderRadius: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ marginTop: 20 }}>
                    <Text style={{ color: "#024F9D", fontSize: 13 }}>Don't have an account? Register</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('AdminProduct')} style={{ marginTop: 20, backgroundColor: "#61B846", paddingVertical: 20, paddingHorizontal: 100, borderRadius: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Admin Panel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default Login