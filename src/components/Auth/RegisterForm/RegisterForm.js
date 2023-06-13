import { useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { validationSchema, initialValues } from './RegisterForm.form'
import { styles } from './RegisterForm.styles'

export function RegisterForm () {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      setLoading(formik.isSubmitting)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  })

  const handleSubmit = () => {
    formik.handleSubmit()
    if (formik.values.password === '' || formik.values.confirmPassword === '') {
      return setError('Debe llenar todos los campos')
    }
    if (formik.values.password !== formik.values.confirmPassword) {
      return setError('Las contraseñas no coinciden')
    }
  }

  const handleChangeText = (field, value) => {
    setError('')
    formik.setFieldValue(field, value)
  }

  return (
    <View style={styles.content}>
      <View style={styles.inputContainer}>
        <Input
          style={[styles.input, formik.errors.email && styles.inputError]}
          variant={'unstyled'}
          placeholder='Email'
          type='text'
          value={formik.values.email}
          onChangeText={(text) => handleChangeText('email', text)}
        />
      </View>
      <View style={[styles.inputContainer, formik.errors.password && styles.inputError]}>
        <Input
          style={styles.input}
          variant={'unstyled'}
          placeholder='Contraseña'
          type='password'
          value={formik.values.password}
          onChangeText={(text) => handleChangeText('password', text)}
        />
      </View>
      <View style={[styles.inputContainer, formik.errors.confirmPassword && styles.inputError]}>
        <Input
          variant={'unstyled'}
          style={styles.input}
          placeholder='Confirmar contraseña'
          type='password'
          value={formik.values.confirmPassword}
          onChangeText={(text) => handleChangeText('confirmPassword', text)}
        />
      </View>
      <Text style={{ color: '#ff4644', textAlign: 'center', fontWeight: '500', fontSize: 16 }}>{error}</Text>
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
