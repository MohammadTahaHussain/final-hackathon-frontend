import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './containers/login';
import Signup from "./containers/signup";
import DiscountStore from "./containers/discountStore";
import ShoppingCart from "./containers/shoppingCart";
import AdminProduct from "./containers/adminProduct";
import AddItems from "./containers/addItem";
import Order from "./containers/order";
import UserSetting from './containers/userSetting';
import AdminSetting from './containers/adminSetting';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="DiscountStore" component={DiscountStore} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen name="AdminProduct" component={AdminProduct} />
        <Stack.Screen name="AddItems" component={AddItems} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="UserSetting" component={UserSetting} />
        <Stack.Screen name="AdminSetting" component={AdminSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

