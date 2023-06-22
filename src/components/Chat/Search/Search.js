import React from 'react'
import { View } from 'react-native'
import { Input } from 'native-base'
import { createFilter } from 'react-search-input'
import { Styles } from './Search.styles'

const KEYS_TO_FILTER = [
  'email',
  'firstName',
  'lastName'
]

export function Search (props) {
  const styles = Styles()
  const { data, setData } = props

  const onSearch = (text) => {
    if (text === '') return setData([])
    const resultSearch = data?.filter(
      createFilter(text, KEYS_TO_FILTER)
    )

    setData(resultSearch)
  }
  return (
    <View style={styles.content}>
      <Input
        variant='unstyled'
        placeholder='Buscar'
        paddingX={3}
        paddingY={2}
        onChangeText={onSearch}
        style={styles.input}
      />
    </View>
  )
}
