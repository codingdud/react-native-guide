import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be min of four char')
    .max(16, 'sould be max of 16 char')
    .required('length is require')
})

export default function App() {
  const [password, setPassword] = useState('')
  const [ispass, setIspss] = useState(false)
  const [upper, setUpper] = useState(false)
  const [lower, setLower] = useState(true)
  const [symbol, setsymbol] = useState(false)
  const [numbers,setNumbers]= useState(false)

  const generatePassword = (passLength: number) => {
    let charlist = ''
    const number = '0123456789'
    const lowerchase = 'abcdefghijklmnopqrstuvwxyz'
    const upperchase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const symbolchar = '!@#$%^&*()_+'

    if (upper) {
      charlist += upperchase
    }
    if (lower) {
      charlist += lowerchase
    }
    if (symbol) {
      charlist += symbolchar
    }
    if (numbers) {
      charlist += number
    }

    setPassword(createpass(charlist, passLength))
    setIspss(true)

  }
  const createpass = (char: string, passLength: number) => {
    let pass = ''
    for (let i = 0; i < passLength; i++) {
      pass += char[Math.floor(Math.random() * char.length)]
    }
    return pass
  }
  const resetPassword = () => {
    setPassword('')
    setIspss(false)
    setUpper(false)
    setLower(true)
    setsymbol(false)
    setNumbers(false)
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength:''}}
            validationSchema={passwordSchema}
            onSubmit={(values) => {
              console.log(values)
              generatePassword(+values.passwordLength)
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                      <Text style={styles.heading}> Password length</Text>
                      {touched.passwordLength && errors.passwordLength && <Text style={styles.errorText}>{errors.passwordLength}</Text>}  
                  </View>
                  <TextInput 
                      style={styles.inputStyle} 
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder='Ex. 8'
                      keyboardType='numeric'
                      />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowecase</Text>
                  <BouncyCheckbox
                  disableText
                  isChecked={lower}
                  onPress={() => setLower(!lower)}
                  fillColor='#29AB87'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include uppercase</Text>
                  <BouncyCheckbox
                  disableText
                  isChecked={upper}
                  onPress={() => setUpper(!upper)}
                  fillColor='#B51B75'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include number</Text>
                  <BouncyCheckbox
                  disableText
                  isChecked={numbers}
                  onPress={() => setNumbers(!numbers)}
                  fillColor='#294B87'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include symbol</Text>
                  <BouncyCheckbox
                  disableText
                  isChecked={symbol}
                  onPress={() => setsymbol(!symbol)}
                  fillColor='#F8D082'
                  />
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                  disabled={!isValid}
                  style={styles.primaryBtn}
                  onPress={()=>handleSubmit()}
                  >
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={()=>{
                    handleReset()
                    resetPassword()
                  }}
                  >
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {ispass && (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Your Password</Text>
            <Text style={styles.description}>Long Press to Copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000'
  },
});