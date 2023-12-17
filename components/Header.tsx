import { StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

import { View, Text } from './themed'
import { TextStyles } from '../constants'

type Props = {
  title: string
  withBackButton?: boolean
}

export const Header = ({ title, withBackButton = true }: Props) => {
  const { back } = useRouter()

  return (
    <View style={styles.container}>
      {withBackButton && (
        <TouchableOpacity onPress={() => back()} style={{ flexShrink: 0, zIndex: 1 }}>
          <Feather name='arrow-left' size={24} colors='black' />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 16
  },
  title: {
    ...TextStyles.TextHeading['4'],
    textAlign: 'center',
    flex: 1,
    marginLeft: -24
  }
})
