import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'native-base'
import { useFormik } from 'formik'
import { User } from '../../../api'
import { useAuth } from '../../../hooks'
import { useNavigation } from '@react-navigation/native'
import { validationSchema, defaultValues } from './UpdateUserInfo.form'
import { Styles } from './UpdateUserInfo.styles'

const userController = new User()

export function UpdateUserInfo () {
  const [error, setError] = useState('')
  const { accessToken, updateUser } = useAuth()
  const { goBack } = useNavigation()
  const styles = Styles()

  const formik = useFormik({
    initialValues: defaultValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const response = await userController.updateUser(accessToken, formValues)
        updateUser({ value: response })
        goBack()
      } catch (error) {
        setError(error.message)
        setError(error)
      }
    }
  })

  const handleSubmit = () => {
    formik.handleSubmit()

    if (formik.values.firstName === '') {
      return setError(formik.errors.firstName)
    }

    setError('')
  }

  const handleChange = (field, value) => {
    setError('')
    formik.setFieldValue(field, value)
  }

  useEffect(() => {
    if (formik.errors.firstName) {
      setError(formik.errors.firstName)
    }
  }, [formik.errors.firstName])
  return (
    <View style={styles.content}>
      <View style={styles.inputContainer}>
        <Input
          style={[styles.input, formik.errors.firstName && styles.inputError]}
          autoCapitalize='words'
          variant={'unstyled'}
          placeholder='Nombre'
          autoFocus
          value={formik.values.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
          type='text'
          />
      </View>
      <View style={styles.inputContainer}>
        <Input
          style={[styles.input]}
          variant={'unstyled'}
          autoCapitalize='words'
          placeholder='Apellido'
          value={formik.values.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
          type='text'
        />
      </View>

      <Text style={styles.errorMessage}>
          {error}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          isLoading={formik.isSubmitting}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Guardar</Text>
        </Button>
      </View>
    </View>
  )
}
