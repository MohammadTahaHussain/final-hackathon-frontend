

import {
    TouchableOpacity,
    View,
    Image,
    Text,
    TextInput,
    ScrollView
} from 'react-native';
import React from 'react';

const UserSetting = ({ navigation }) => {
    return (
        <ScrollView style={{ margin: 10 , padding: 20}}>
            <View
                style={{
                    marginTop: 15,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginBottom: 30,
                }}>
                <Text
                    style={{
                        color: '#024F9D',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: 25,
                        lineHeight: 25,
                        marginBottom: 10,
                    }}>
                    Settings
                </Text>
                <Image
                    source={require('../assets/usericon.png')}
                    style={{ height: 100, width: 100, marginBottom: 5 }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: "#D4D3D3"
                    }}>
                    <TextInput
                        style={{ paddingLeft: 10, width: 200 }}
                        placeholder="Update Full Name"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/done.png')}
                            style={{ height: 20, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <View style={{ marginTop: 20, borderColor: "#D9D9D9", borderBottomWidth: 2 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Inzamam Malik</Text>
                    <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "black" }}>Just Now - Pending</Text>
                        <Text>03022004480</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text>2 x ITEM NAME</Text>
                        <Text>3 x ITEM NAME</Text>
                    </View>
                    <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Total</Text>
                        <Text style={{ color: "#61B846", fontWeight: "bold" }}>Rs. 185.00</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, borderColor: "#D9D9D9", borderBottomWidth: 2 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Inzamam Malik</Text>
                    <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "black" }}>Just Now - Pending</Text>
                        <Text>03022004480</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text>2 x ITEM NAME</Text>
                        <Text>3 x ITEM NAME</Text>
                    </View>
                    <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Total</Text>
                        <Text style={{ color: "#61B846", fontWeight: "bold" }}>Rs. 185.00</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, borderColor: "#D9D9D9", borderBottomWidth: 2 }}>
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>Inzamam Malik</Text>
                    <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "black" }}>Just Now - Pending</Text>
                        <Text>03022004480</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text>2 x ITEM NAME</Text>
                        <Text>3 x ITEM NAME</Text>
                    </View>
                    <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Total</Text>
                        <Text style={{ color: "#61B846", fontWeight: "bold" }}>Rs. 185.00</Text>
                    </View>
                </View>
            </View>



            <View style={{marginTop: 20, alignItems: 'center', }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        width: "100%",
                        backgroundColor: '#61B846',
                        padding: 10,
                        borderRadius: 10,
                    }}>
                    <Text style={{ fontSize: 22, padding: 5, color: 'white' }}>Logout</Text>
                </TouchableOpacity>
            </View>


            <View style={{ height: 100,flexDirection: "row", alignItems: "center" ,justifyContent: "space-between", paddingHorizontal: 60}}>
               <View style={{flexDirection: "row", justifyContent: "space-between", width: 250}}>
               <TouchableOpacity onPress={() => navigation.navigate('DiscountStore')} style={{alignItems: "center"}}>
                    <Image
                        source={require("../assets/home.png")}
                    />
                    <Text style={{marginTop: 10}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}  style={{alignItems: "center"}}>
                    <Image
                        source={require("../assets/home.png")}
                    />
                    <Text style={{marginTop: 10}}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{alignItems: "center"}}>
                    <Image
                        source={require("../assets/profile.png")}
                    />
                    <Text style={{marginTop: 10, color: "#61B846"}}>Account</Text>
                </TouchableOpacity>
               </View>
            </View>
        </ScrollView>
    );
}


export default UserSetting