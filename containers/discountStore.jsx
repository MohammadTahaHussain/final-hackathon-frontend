import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native"

const DiscountStore = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{ padding: 20, }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ color: "#61B846", fontSize: 20, fontWeight: "bold" }}>SAYLANI WELFARE</Text>
                        <Text style={{ color: "#024F9D", fontSize: 13, fontWeight: "bold" }}>DISCOUNT STORE</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
                        <Image
                            source={require("../assets/Carticon.png")}
                            style={{ height: 30, width: 30 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Image
                        source={require("../assets/Grocery.png")}
                    />
                </View>
                <View style={{ width: 360, marginTop: 20, borderWidth: 1, borderColor: "black", flexDirection: "row", alignItems: "center", borderRadius: 30 }}>
                    <Image
                        source={require("../assets/Searchicon.png")}
                        style={{ marginLeft: 10, marginRight: 20 }}
                    />
                    <TextInput placeholder="Search by product name" style={{ width: 250, height: 40 }} />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontWeight: "bold" }}>Shop by Categery</Text>
                    <ScrollView horizontal style={{ marginTop: 10, flexDirection: "row", paddingBottom: 10 }}>
                        <Image
                            source={require("../assets/Rectangle1.png")}
                            style={{ marginLeft: 10, marginRight: 20 }}
                        />
                        <Image
                            source={require("../assets/Rectangle1.png")}
                            style={{ marginLeft: 10, marginRight: 20 }}
                        />
                        <Image
                            source={require("../assets/Rectangle1.png")}
                            style={{ marginLeft: 10, marginRight: 20 }}
                        />
                        <Image
                            source={require("../assets/Rectangle1.png")}
                            style={{ marginLeft: 10, marginRight: 20 }}
                        />
                    </ScrollView>
                </View>

                <ScrollView  >
                    <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Image
                            source={require("../assets/meat.png")}
                        />
                        <View style={{ width: 170 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Meat</Text>
                            <Text style={{ fontSize: 12 }}>This is product description This is abc product description</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 10, fontWeight: "bold", }}>Rs.800 - per Kg</Text>
                            <TouchableOpacity style={{ backgroundColor: "#61B846", width: 50, height: 35, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={require("../assets/+.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Image
                            source={require("../assets/meat.png")}
                        />
                        <View style={{ width: 170 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Meat</Text>
                            <Text style={{ fontSize: 12 }}>This is product description This is abc product description</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 10, fontWeight: "bold", }}>Rs.800 - per Kg</Text>
                            <TouchableOpacity style={{ backgroundColor: "#61B846", width: 50, height: 35, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={require("../assets/+.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Image
                            source={require("../assets/meat.png")}
                        />
                        <View style={{ width: 170 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Meat</Text>
                            <Text style={{ fontSize: 12 }}>This is product description This is abc product description</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 10, fontWeight: "bold", }}>Rs.800 - per Kg</Text>
                            <TouchableOpacity style={{ backgroundColor: "#61B846", width: 50, height: 35, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={require("../assets/+.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Image
                            source={require("../assets/meat.png")}
                        />
                        <View style={{ width: 170 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Meat</Text>
                            <Text style={{ fontSize: 12 }}>This is product description This is abc product description</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 10, fontWeight: "bold", }}>Rs.800 - per Kg</Text>
                            <TouchableOpacity style={{ backgroundColor: "#61B846", width: 50, height: 35, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    source={require("../assets/+.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                <View style={{marginTop: 10 , flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 60 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: 250 }}>
                        <TouchableOpacity style={{ alignItems: "center" }}>
                            <Image
                                source={require("../assets/home.png")}
                            />
                            <Text style={{ marginTop: 10, color: "#61B846" }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')} style={{ alignItems: "center" }}>
                            <Image
                                source={require("../assets/home.png")}
                            />
                            <Text style={{ marginTop: 10 }}>Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('UserSetting')} style={{ alignItems: "center" }}>
                            <Image
                                source={require("../assets/profile.png")}
                            />
                            <Text style={{ marginTop: 10 }}>Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
         </ScrollView>
    )
}

export default DiscountStore