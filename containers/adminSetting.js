
import {
    TouchableOpacity,
    View,
    Image,
    Text,
    TextInput,
    ScrollView
} from 'react-native';

const AdminSetting = ({navigation}) => {
    return (
        <ScrollView style={{ padding: 20 }}>
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

            <View style={{ marginTop: 20, justifyContent: "space-between" }}>
                <View style={{ marginBottom: 10, borderRadius: 20, width: 365, paddingVertical: 20, backgroundColor: "#D9D9D9", alignItems: "center" }}>
                    <Image source={require("../assets/camera.png")} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <TextInput style={{ backgroundColor: "#D9D9D9", width: 250, borderRadius: 20, paddingLeft: 10 }} placeholder="new category name" />
                    <View style={{ width: 80, backgroundColor: "#61B846", height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}><Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>ADD</Text></View>
                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ color: "#024F9D", fontSize: 18, fontWeight: "bold" }}>All Categories</Text>
            </View>

            <ScrollView>
                <View style={{marginTop: 20}}>
                    <View style={{marginBottom: 10,flexDirection: 'row', borderWidth: 2, borderColor: "#65BD50", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 20, alignContent: "center"}}>
                        <Image source={require("../assets/fruits.png")} />
                        <Text style={{marginLeft: 30, color: "#65BD50", fontSize: 20}}>Fruit</Text>
                    </View>
                    <View style={{marginBottom: 10,flexDirection: 'row', borderWidth: 2, borderColor: "#65BD50", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 20, alignContent: "center"}}>
                        <Image source={require("../assets/fruits.png")} />
                        <Text style={{marginLeft: 30, color: "#65BD50", fontSize: 20}}>Fruit</Text>
                    </View>
                    <View style={{marginBottom: 10,flexDirection: 'row', borderWidth: 2, borderColor: "#65BD50", paddingHorizontal: 20, paddingVertical: 20, borderRadius: 20, alignContent: "center"}}>
                        <Image source={require("../assets/fruits.png")} />
                        <Text style={{marginLeft: 30, color: "#65BD50", fontSize: 20}}>Fruit</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={{ marginTop: 20, alignItems: 'center', }}>
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


            <View style={{marginBottom: 20, marginTop: 20,height: 100, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 60 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 250 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminProduct')} style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/home.png")}
                        />
                        <Text style={{ marginTop: 10 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddItems')} style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/plus.png")}
                        />
                        <Text style={{ marginTop: 10 }}>Add items</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ alignItems: "center" }}>
                        <Image
                            source={require("../assets/profile.png")}
                        />
                        <Text style={{ marginTop: 10, color: "#61B846" }}>Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default AdminSetting