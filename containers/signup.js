import { Text, View, TextInput, Image,TouchableOpacity,ScrollView } from "react-native"
const Signup = ({navigation}) => {
  return (
    <ScrollView>
    <View style={{height: 840, alignItems: "center"}}>
      <View style={{flex: .3, justifyContent: "center", alignItems: "center"}}>
      <Text style={{color: "#61B846", fontSize: 30, fontWeight: "bold"}}>SAYLANI WELFARE</Text>
      <Text style={{color: "#024F9D", fontSize: 15, fontWeight: "bold"}}>ONLINE DISCOUNT STORE</Text>
      </View>
      <View style={{flex: .4, justifyContent: "center"}}>
      <View style={{width: 300,borderBottomWidth: 1,borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <TextInput  placeholder="Full Name" style={{width: 250}}/>
      <Image
        source={require("../assets/loginprofile.png")}
        style={{height: 30, width: 30}}
      />
      </View>
      <View style={{width: 300,borderBottomWidth: 1,borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <TextInput  placeholder="Contact" style={{width: 250}}/>
      <Image
        source={require("../assets/phone.png")}
        style={{height: 20, width: 30}}
      />
      </View>
      <View style={{width: 300,borderBottomWidth: 1,borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <TextInput  placeholder="Email" style={{width: 250}}/>
      <Image
        source={require("../assets/Emailicon.png")}
        style={{height: 30, width: 30}}
      />
      </View>
      <View style={{width: 300,borderBottomWidth: 1,borderColor: "black", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <TextInput  placeholder="Password" style={{width: 250}}/>
      <Image
        source={require("../assets/Passwordicon.png")}
        style={{height: 30, width: 30}}
      />
      </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor: "#61B846", paddingVertical: 20, paddingHorizontal: 100, borderRadius: 20}}>
        <Text style={{color: "white", fontSize: 20}}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{marginTop: 20}}>
        <Text style={{color: "#024F9D", fontSize: 13}}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}
export default Signup