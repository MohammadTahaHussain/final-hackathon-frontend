import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native"
const AddItems = ({ navigation }) => {
    return (
        <ScrollView style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderColor: "#D9D9D9", paddingBottom: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminProduct')} >
                        <Image
                            source={require("../assets/leftArrow.png")}
                            style={{ height: 30, marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require("../assets/profilePhoto.png")}
                        style={{ height: 50, width: 50 }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: "#024F9D", fontSize: 20, fontWeight: "bold" }}>Mr. Ahmed</Text>
                        <Text style={{ color: "#61B846", fontSize: 20, fontWeight: "bold" }}>Admin</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                        <Image
                            source={require("../assets/noteBook.png")}
                            style={{ height: 40 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ color: "#024F9D", fontSize: 18, fontWeight: "bold" }}>Add New Item</Text>
            </View>

            <View style={{ marginTop: 20, justifyContent: "space-between" }}>
                <View style={{ marginBottom: 10, borderRadius: 20, width: 365, paddingVertical: 50, backgroundColor: "#D9D9D9", alignItems: "center" }}>
                    <Image source={require("../assets/camera.png")} />
                </View>
                <View style={{ marginBottom: 10, borderRadius: 20, width: 365, backgroundColor: "#D9D9D9", paddingLeft: 20 }}>
                    <TextInput placeholder="Item Name" />
                </View>
                <View style={{ marginBottom: 10, borderRadius: 20, width: 365, backgroundColor: "#D9D9D9", paddingLeft: 20 }}>
                    <TextInput placeholder="Item Name" />
                </View>
                <View style={{ marginBottom: 10, borderRadius: 20, width: 365, height: 100, backgroundColor: "#D9D9D9", paddingLeft: 20 }}>
                    <TextInput placeholder="Describe this Item" />
                </View>

                <View style={{ marginBottom: 15, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={{ color: "#024F9D", fontWeight: "bold", fontSize: 18 }}>Unit Name:</Text>
                    <TextInput style={{ backgroundColor: "#D9D9D9", width: 200, borderRadius: 20, paddingLeft: 10 }} placeholder="Describe this Item" />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <Text style={{ color: "#024F9D", fontWeight: "bold", fontSize: 18 }}>Unit Price:</Text>
                    <TextInput style={{ backgroundColor: "#D9D9D9", width: 200, borderRadius: 20, paddingLeft: 10 }} placeholder="Rs: 300" />
                </View>

                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: "#61B846", width: 200, height: 60, borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Add Product</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: 100, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 60 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 250 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminProduct')} style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/home.png")}
                        />
                        <Text style={{ marginTop: 10 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/plus.png")}
                        />
                        <Text style={{ marginTop: 10, color: "#61B846" }}>Add items</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminSetting')} style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/profile.png")}
                        />
                        <Text style={{ marginTop: 10 }}>Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
export default AddItems