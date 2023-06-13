import * as Yup from 'yup'

export function initialValues () {
  return {
    email: '',
    password: '',
    confirmPassword: ''
  }
}

export function validationSchema () {
  return Yup.object({
    email: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
    confirmPassword: Yup.string()
      .required('La confirmación de contraseña es obligatoria')
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
  })
}
