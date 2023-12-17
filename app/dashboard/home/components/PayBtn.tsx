import { StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

import { Text } from '../../../../components/themed'

import Colors from '../../../../constants/Colors'
import { TextStyles } from '../../../../constants'

export const PayBtn = () => {
  return (
    <Link href='/dashboard/home/scanQR/' asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: Colors.primary[100],
    flex: 1
  },

  buttonText: {
    color: Colors.primary[50],
    textAlign: 'center',
    ...TextStyles.TextBody['1-sb']
  }
})
