import { useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { validationSchema, initialValues } from './RegisterForm.form'
import { styles } from './RegisterForm.styles'

export function RegisterForm () {
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      if (formValues.password === '' || confirmPassword === '') {
        console.log('error')
        return setError('Complete todos los campos')
      }
      console.log(formValues)
    }
  })
  return (
    <View style={styles.content}>
      <View style={styles.inputContainer}>
        <Input
          variant={'unstyled'}
          style={[styles.input, formik.errors.email && styles.inputError]}
          placeholder='Email'
          type='text'
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue('email', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          variant={'unstyled'}
          placeholder='Contraseña'
          type='password'
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue('password', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          variant={'unstyled'}
          style={styles.input}
          placeholder='Confirmar contraseña'
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          type='password'
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={formik.handleSubmit}
          isLoading={formik.isSubmitting}
        >
          <Text style={styles.button}>Registrarme</Text>
        </Button>
      </View>
      <Text style={{ color: '#fff' }}>{error}</Text>
    </View>
  )
}
