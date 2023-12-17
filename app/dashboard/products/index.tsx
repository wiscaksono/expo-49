import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

import { Text } from '../../../components/themed'
import { Container } from '../../../components/Container'
import { Header } from '../../../components/Header'
import { SheetEmpty } from '../../../components/Sheets/SheetEmpty'

import Colors from '../../../constants/Colors'
import { TextStyles } from '../../../constants'
import { useSheet } from '../../../hooks'

export default function Products() {
  const { sheetRef, openSheet } = useSheet()
  const menu = [
    {
      title: 'Bank accounts'
    },
    {
      title: 'Home loans'
    },
    {
      title: 'Credit cards'
    },
    {
      title: 'Personal loan'
    },
    {
      title: 'Internasional & Travel'
    },
    {
      title: 'Insurance'
    },
    {
      title: 'Shares & Investing'
    },
    {
      title: 'Superannuation'
    },
    {
      title: 'Business products'
    }
  ]

  return (
    <>
      <Container>
        <Header title='Products' />
        <ScrollView showsVerticalScrollIndicator={false}>
          {menu.map(item => (
            <TouchableOpacity key={item.title} style={styles.btn} onPress={openSheet}>
              <Text style={styles.btnText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Container>
      <SheetEmpty ref={sheetRef} snapPoint={['20%']}>
        <Text
          style={{
            ...TextStyles.TextHeading[3],
            textAlign: 'center'
          }}
        >
          Nothing to do here :(
        </Text>
      </SheetEmpty>
    </>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 20
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutral[30],
    lineHeight: 22
  }
})
