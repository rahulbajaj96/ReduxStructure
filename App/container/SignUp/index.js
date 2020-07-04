import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Appstyles from '../../utils/Appstyles';
import AppConstants from '../../constants/AppConstants';
import { InputField } from '../../components/InputField';
import { AppButton } from '../../components/AppButton';
import { useDispatch, useSelector } from "react-redux";
import { SignUpaction } from '../../actions/signupAction';
const SignUp = ({ navigation }) => {
    const [credential, setCredential] = useState({
        email: "",
        password: "",
        phone: "",
        confmPass: ""
    });
    const dispatch = useDispatch();

    const { email, password, phone, confmPass } = credential;

    const handleOnChange = (name, value) => {
        setCredential({
            ...credential,
            [name]: value,
        });
    };
    const onSignUpPress = () => {
        dispatch(SignUpaction(email, password,phone,confmPass)).then(result => {
            if (result) {
                navigation.navigate('DashBoard')
            }
        })
    }
    return (
        <SafeAreaProvider style={{ backgroundColor: '#222222', flex: 1 }}>
            <View style={{ flex: 1, }} >
                <View style={[{ flex: 0.3,  }, Appstyles.commonStyles.centerStyles]}>
                    <Image source={{ uri: AppConstants.ImageUrl }} style={{ height: '100%', width: '100%' }} />
                </View>
                <View style={[{ flex: 0.7, paddingVertical: '10%' }, Appstyles.commonStyles.centerStyles]}>
                    <InputField
                        placeholder="Enter email"
                        value={email}
                        onChangeText={(text) => handleOnChange("email", text)}

                    />
                    <InputField
                        placeholder="Enter phone"
                        value={phone}
                        onChangeText={(text) => handleOnChange("phone", text)}

                    />
                    <InputField
                        placeholder="Enter password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(text) => handleOnChange("password", text)}

                    />
                    <InputField
                        placeholder="Confirm password"
                        value={confmPass}
                        secureTextEntry={true}
                        onChangeText={(text) => handleOnChange("confmPass", text)}

                    />
                    <AppButton title="SignUp" onPress={() => onSignUpPress()} />
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: "bold",
                            color: 'green', marginTop: '5%'
                        }}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                    >
                       Login
            </Text>
                </View>
            </View>
        </SafeAreaProvider>
    )
}
export default SignUp;