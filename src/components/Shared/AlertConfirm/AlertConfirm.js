import { useState } from 'react'
import { Text } from 'react-native'
import { AlertDialog, Button } from 'native-base'
import { Styles } from './AlertConfirm.styles'

export function AlertConfirm (props) {
  const {
    show,
    title,
    onClose,
    message,
    isDanger,
    onConfirm,
    textConfirm
  } = props

  const styles = Styles()
  const [loading, setLoading] = useState(false)

  const onConfirmWrapper = () => {
    setLoading(true)
    onConfirm()
  }

  return (
    <AlertDialog isOpen={show} onClose={onClose}>
      <AlertDialog.Content {...styles.content}>
        <AlertDialog.CloseButton {...styles.closeButton} />

        <AlertDialog.Header style={styles.header}>
          <Text style={styles.titleText}>{title}</Text>
        </AlertDialog.Header>

        <AlertDialog.Body style={styles.body}>
          <Text style={styles.messageText}>{message}</Text>
        </AlertDialog.Body>

        <AlertDialog.Footer style={styles.footer}>
          <Button.Group space={2} style={styles.buttonsContainer}>
            <Button
              variant='unstyled'
              onPress={onClose}
              _text={styles.cancel}
              style={styles.button}
            >
              Cancelar
            </Button>
            <Button
              onPress={onConfirmWrapper}
              isLoading={loading}
              style={[styles.button, isDanger ? styles.danger : styles.confirm]}
              _text={styles.buttonConfirm}>
              {textConfirm}
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
