import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Appstyles from '../../utils/Appstyles';
import AppConstants from '../../constants/AppConstants';
import { InputField } from '../../components/InputField';
import { AppButton } from '../../components/AppButton';
import { useDispatch, useSelector } from "react-redux";
import { loginaction } from '../../actions/loginaction';

const Login = ({ navigation }) => {

    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const { loginresult } = useSelector(state => ({
        loginresult: state.loginReducer.loginresponse,
    }));
    const { email, password } = credential;

    const handleOnChange = (name, value) => {
        setCredential({
            ...credential,
            [name]: value,
        });
    };
    const onLoginPress = () => {
        dispatch(loginaction(email, password)).then(result => {
            if (result) {
                console.log(loginresult)
                navigation.navigate('DashBoard')
            }
        })


        console.log('loginresult', loginresult)
    }
    return (
        <SafeAreaProvider style={{ backgroundColor: '#222222', flex: 1 }}>
            <View style={{ flex: 1, }} >
                <View style={[{ flex: 0.3, }, Appstyles.commonStyles.centerStyles]}>
                    <Image source={{ uri: AppConstants.ImageUrl }} style={{ height: '100%', width: '100%' }} />
                </View>
                <View style={[{ flex: 0.7, paddingVertical: '10%' }, Appstyles.commonStyles.centerStyles]}>
                    <InputField
                        placeholder="Enter email"
                        value={email}
                        onChangeText={(text) => handleOnChange("email", text)}

                    />
                    <InputField
                        placeholder="Enter password"
                        value={password}

                        secureTextEntry={true}
                        onChangeText={(text) => handleOnChange("password", text)}

                    />

                    <AppButton title="Login" onPress={() => onLoginPress()} />
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: "bold",
                            color: 'green', marginTop: '5%'
                        }}
                        onPress={() => {
                            // setInitialState();
                            navigation.navigate("SignUp");
                        }}
                    >
                        Sign Up
            </Text>
                </View>
            </View>
        </SafeAreaProvider>
    )
}
export default Login;