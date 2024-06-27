
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import {userSchema} from '../utility/yepValidationSchema';
import {useLogin} from '../api/apis';
const LoginForm = () => {
    const Loginapi=useLogin()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    return (
        <View style={styles.LgoinStyle}>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <View style={styles.LableStyle}>
                        <Text>
                            email/phone
                        </Text>
                        <TextInput
                            style={styles.inputStyle}
                            value={value}
                            onChangeText={onChange}
                            placeholder="email/phone"
                        />
                    </View>
                )}
                name="username"
            />
            {errors.username && <Text style={styles.errorStyle}>
                {errors.username.message}
            </Text>}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <View style={styles.LableStyle}>
                        <Text>
                            Password
                        </Text>
                        <TextInput
                            style={styles.inputStyle}
                            value={value}
                            onChangeText={onChange}
                            placeholder="Password"
                            secureTextEntry
                        />
                    </View>
                )}
                name="password"
            />
            {errors.password && <Text style={styles.errorStyle}>
                {errors.password.message}
            </Text>}
            <TouchableOpacity
                onPress={handleSubmit(Loginapi)}
                style={styles.button}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '98%',
        marginTop: '7%',
        alignSelf: "center"
    },
    LableStyle: {
        marginTop: '5%',
        alignItems: 'flex-start',
        width: '90%',
        justifyContent: 'space-between',
        gap: 4,
    },
    inputStyle: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: '2%',
        paddingLeft: '3%',
    },
    LgoinStyle: {
        marginTop: '10%',
        width: '100%',
        alignItems: 'center',
        gap: 10,
    },
    button: {
        marginTop: '5%',
        backgroundColor: 'black',
        borderRadius: 8,
        paddingHorizontal: '20%',
        padding: '2%',
        justifyContent: "center"
    },
    loginText: {
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        alignSelf: "center"
    },
    reginstrationText: {
        marginBottom: '2%',
    },
    errorStyle: {
        color: 'red',
        textAlign:'left',
        width:'90%',
    }
})
