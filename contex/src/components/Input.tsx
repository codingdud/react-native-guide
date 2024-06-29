import { StyleSheet, Text, TextInput, View, } from 'react-native'
import React from 'react'

type InputProps = {
    Icon: () => React.ReactNode,
    value: string;
    onChange: (text: string) => void;
    lable: string;
    secureTextEntry?: boolean;
};

const Input = ({ Icon, value, onChange, lable,...props }: InputProps) => {
    return (
        <View style={styles.LableStyle}>
            <View style={styles.row}>
                <Icon />
                <Text>
                    {lable}
                </Text>
            </View>
            <TextInput
                style={styles.inputStyle}
                value={value}
                onChangeText={onChange}
                placeholder={lable}
                {...props}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
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
})