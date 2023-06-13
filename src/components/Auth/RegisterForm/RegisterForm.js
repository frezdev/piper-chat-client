import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { Auth } from '../../../api'
import { validationSchema, initialValues } from './RegisterForm.form'
import { styles } from './RegisterForm.styles'

const authController = new Auth()

export function RegisterForm () {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      setLoading(formik.isSubmitting)
      try {
        await authController.register(formValues)
        navigation.goBack()
      } catch (error) {
        setError(error.message)
      }
      setLoading(false)
    }
  })

  const handleSubmit = () => {
    formik.handleSubmit()
  }

  const handleChangeText = (field, value) => {
    setError('')
    formik.setFieldValue(field, value)
  }

  useEffect(() => {
    if (formik.errors.email && (formik.errors.password || formik.errors.confirmPassword)) {
      return setError('Debe llenar todos los campos')
    }
    if (formik.errors.email) return setError(formik.errors.email)
    if (formik.errors.password || formik.errors.confirmPassword) {
      return setError(formik.errors.password || formik.errors.confirmPassword)
    }
  }, [formik.errors.email, formik.errors.password, formik.errors.confirmPassword])

  return (
    <View style={styles.content}>
      <View style={styles.inputContainer}>
        <Input
          style={[styles.input, formik.errors.email && styles.inputError]}
          autoCapitalize='none'
          variant={'unstyled'}
          placeholder='Email'
          type='text'
          value={formik.values.email}
          onChangeText={(text) => handleChangeText('email', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          style={[styles.input, formik.errors.password && styles.inputError]}
          variant={'unstyled'}
          secureTextEntry
          placeholder='Contraseña'
          value={formik.values.password}
          onChangeText={(text) => handleChangeText('password', text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          style={[styles.input, formik.errors.confirmPassword && styles.inputError]}
          variant={'unstyled'}
          secureTextEntry
          placeholder='Confirmar contraseña'
          value={formik.values.confirmPassword}
          onChangeText={(text) => handleChangeText('confirmPassword', text)}
        />
      </View>
      <Text style={styles.errorMessage}>{error}</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={handleSubmit}
          isLoading={loading}
        >
          <Text style={styles.button}>Registrarme</Text>
        </Button>
      </View>
    </View>
  )
}
