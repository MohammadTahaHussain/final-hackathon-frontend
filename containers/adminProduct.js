
import { View, Text, Image, TouchableOpacity } from "react-native"
const AdminProduct = ({navigation}) => {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderColor: "#D9D9D9", paddingBottom: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
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
                <Text style={{ color: "#024F9D", fontSize: 18, fontWeight: "bold" }}>All Products</Text>
            </View>

            <View style={{marginTop: 20}}>
                <View style={{padding: 5,borderRadius: 20,  borderWidth: 1, borderColor: "#65BD50",marginBottom: 20 ,flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("../assets/apple.png")} />
                        <View style={{marginLeft: 10}}>
                            <Text style={{ color: "#61B846", fontSize: 18, fontWeight: "bold" }}>Apple</Text>
                            <Text>1. KG</Text>
                        </View>
                    </View>
                    <Text>Rs. 200</Text>
                </View>
                <View style={{padding: 5,borderRadius: 20,  borderWidth: 1, borderColor: "#65BD50",marginBottom: 20 ,flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("../assets/apple.png")} />
                        <View style={{marginLeft: 10}}>
                            <Text style={{ color: "#61B846", fontSize: 18, fontWeight: "bold" }}>Apple</Text>
                            <Text>1. KG</Text>
                        </View>
                    </View>
                    <Text>Rs. 200</Text>
                </View>
                <View style={{padding: 5,borderRadius: 20,  borderWidth: 1, borderColor: "#65BD50",marginBottom: 20 ,flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("../assets/apple.png")} />
                        <View style={{marginLeft: 10}}>
                            <Text style={{ color: "#61B846", fontSize: 18, fontWeight: "bold" }}>Apple</Text>
                            <Text>1. KG</Text>
                        </View>
                    </View>
                    <Text>Rs. 200</Text>
                </View>
                <View style={{padding: 5,borderRadius: 20,  borderWidth: 1, borderColor: "#65BD50",marginBottom: 20 ,flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("../assets/apple.png")} />
                        <View style={{marginLeft: 10}}>
                            <Text style={{ color: "#61B846", fontSize: 18, fontWeight: "bold" }}>Apple</Text>
                            <Text>1. KG</Text>
                        </View>
                    </View>
                    <Text>Rs. 200</Text>
                </View>
                <View style={{padding: 5,borderRadius: 20,  borderWidth: 1, borderColor: "#65BD50",marginBottom: 20 ,flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("../assets/apple.png")} />
                        <View style={{marginLeft: 10}}>
                            <Text style={{ color: "#61B846", fontSize: 18, fontWeight: "bold" }}>Apple</Text>
                            <Text>1. KG</Text>
                        </View>
                    </View>
                    <Text>Rs. 200</Text>
                </View>
            </View>

            <View style={{ height: 100,flexDirection: "row", alignItems: "center" ,justifyContent: "space-between", paddingHorizontal: 60}}>
               <View style={{flexDirection: "row", justifyContent: "space-between", width: 250}}>
               <TouchableOpacity style={{alignItems: "center"}}>
                    <Image
                        source={require("../assets/home.png")}
                    />
                    <Text style={{marginTop: 10, color: "#61B846"}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddItems')} style={{alignItems: "center"}}>
                    <Image
                        source={require("../assets/plus.png")}
                    />
                    <Text style={{marginTop: 10}}>Add items</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AdminSetting')} style={{alignItems: "center"}}>
                    <Image
                        source={require("../assets/profile.png")}
                    />
                    <Text style={{marginTop: 10}}>Account</Text>
                </TouchableOpacity>
               </View>
            </View>
        </View>
    )
}

export default AdminProduct