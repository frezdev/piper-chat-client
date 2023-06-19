import * as Yup from 'yup'
import { useAuth } from '../../../hooks'

export function defaultValues () {
  const { user } = useAuth()
  return {
    firstName: user.firstName,
    lastName: user.lastName
  }
}

export function validationSchema () {
  return Yup.object({
    firstName: Yup.string().required('Este campo es requerido'),
    lastName: Yup.string()
  })
}
