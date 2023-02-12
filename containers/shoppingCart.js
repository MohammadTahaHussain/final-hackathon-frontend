
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native"

const ShoppingCart = ({navigation}) => {
    return (
        <ScrollView style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <Image
                    source={require("../assets/profilePhoto.png")}
                />
            </View>
            <View style={{ marginTop: 20, flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
                <View>
                    <Text style={{ color: "#024F9D", fontSize: 20 }}>Shopping</Text>
                    <Text style={{ color: "#61B846", fontSize: 25, fontWeight: "bold" }}>Cart</Text>
                </View>
                <Image
                    source={require("../assets/delete.png")}
                    style={{ height: 20, width: 20 }}
                />
            </View>

            <ScrollView>
                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={require("../assets/meat.png")}
                    />
                    <View style={{ flexDirection: "row", width: 180, justifyContent: "space-between", alignItems: "center", paddingLeft: 10, paddingRight: 50 }}>
                        <View style={{}}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Meat</Text>
                        </View>
                        <View style={{ width: 50, flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20 }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20 }}>0</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", }}>Rs.800</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={require("../assets/meat.png")}
                    />
                    <View style={{ flexDirection: "row", width: 180, justifyContent: "space-between", alignItems: "center", paddingLeft: 10, paddingRight: 50 }}>
                        <View style={{}}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Meat</Text>
                        </View>
                        <View style={{ width: 50, flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20 }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20 }}>0</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", }}>Rs.800</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={require("../assets/meat.png")}
                    />
                    <View style={{ flexDirection: "row", width: 180, justifyContent: "space-between", alignItems: "center", paddingLeft: 10, paddingRight: 50 }}>
                        <View style={{}}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Meat</Text>
                        </View>
                        <View style={{ width: 50, flexDirection: "row", justifyContent: "space-between" }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20 }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20 }}>0</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", }}>Rs.800</Text>
                    </View>
                </View>

                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: "bold" }}>Total</Text>
                    <Text style={{ fontWeight: "bold" }}>RS: 185.00</Text>
                </View>
            </ScrollView>

            <View style={{ marginTop: 20, flex: .4, justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TextInput placeholder="Full Name" style={{ width: 250 }} />

                </View>
                <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TextInput placeholder="Email" style={{ width: 250 }} />

                </View>
                <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TextInput placeholder="Phone Number" style={{ width: 250 }} />

                </View>
                <View style={{ width: 300, borderBottomWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <TextInput placeholder="Shipping Address" style={{ width: 250 }} />

                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')} style={{ marginTop: 20, backgroundColor: "#61B846", paddingVertical: 15, paddingHorizontal: 100, borderRadius: 20 }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Place Order</Text>
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
                <TouchableOpacity  style={{alignItems: "center"}}>
                    <Image
                        source={require("../assets/home.png")}
                    />
                    <Text style={{marginTop: 10, color: "#61B846"}}>Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('UserSetting')} style={{alignItems: "center"}}>
                    <Image
                        source={require("../assets/profile.png")}
                    />
                    <Text style={{marginTop: 10}}>Account</Text>
                </TouchableOpacity>
               </View>
            </View>
        </ScrollView>
    )
}
export default ShoppingCart