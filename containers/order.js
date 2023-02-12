
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
const Order = ({navigation}) => {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderColor: "#D9D9D9", paddingBottom: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddItems')} >
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
                <View style={{ backgroundColor: "#61B846", padding: 2 }}>
                    <Image
                        source={require("../assets/noteBook.png")}
                        style={{ height: 40 }}
                    />
                </View>
            </View>


            <View style={{ marginTop: 20 }}>
                <Text style={{ color: "#024F9D", fontSize: 20, fontWeight: "bold" }}>Orders</Text>
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
                    <View style={{ marginTop: 20, marginBottom: 10, borderRadius: 20, width: 365, height: 50, backgroundColor: "#D9D9D9", paddingLeft: 20 }}>
                        <TextInput placeholder="Change status" />
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
                    <View style={{ marginTop: 20, marginBottom: 10, borderRadius: 20, width: 365, height: 50, backgroundColor: "#D9D9D9", paddingLeft: 20 }}>
                        <TextInput placeholder="Change status" />
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
                    <View style={{ marginTop: 20, marginBottom: 10, borderRadius: 20, width: 365, height: 50, backgroundColor: "#D9D9D9", paddingLeft: 20 }}>
                        <TextInput placeholder="Change status" />
                    </View>
                </View>
            </View>

        </View>
    )
}
export default Order