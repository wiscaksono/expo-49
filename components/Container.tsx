import { View } from '../components/themed'
import { SafeAreaView, StyleSheet } from 'react-native'

type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 1
        }}
      >
        {children}
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20
  },
  safeArea: {
    flex: 1,
    marginHorizontal: 24
  }
})
