import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import { Header } from '../../../components/Header'
import { Text, View } from '../../../components/themed'
import { Container } from '../../../components/Container'
import { SheetEmpty } from '../../../components/Sheets/SheetEmpty'

import Colors from '../../../constants/Colors'
import { TextStyles } from '../../../constants'
import { useSheet } from '../../../hooks'

export default function Home() {
  const { sheetRef, openSheet } = useSheet()
  const menu = [
    {
      title: 'Settings',
      desc: 'Personal details, security and communications'
    },
    {
      title: 'Documents',
      desc: 'Statements, tax summaries, proof of balance'
    },
    {
      title: 'Payments',
      desc: 'Upcoming, past, direct debit, BPAY'
    },
    {
      title: 'Help',
      desc: 'FAQ, financial tips, topics, feedback'
    }
  ]

  return (
    <>
      <Container>
        <Header title='Profile' />
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 24 }}>
          <View style={styles.topWrapper}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JS</Text>
            </View>
            <View>
              <Text style={styles.name}>Jason Smith</Text>
              <Text style={styles.customerID}>Customer ID: 12304567</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btnWithIcon} onPress={openSheet}>
            <FontAwesome5 name='paper-plane' size={24} color={Colors.primary[50]} />
            <Text style={styles.btnText}>Inbox</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnWithIcon} onPress={openSheet}>
            <Ionicons name='chatbox-outline' size={24} color={Colors.primary[50]} />
            <Text style={styles.btnText}>Contact us</Text>
          </TouchableOpacity>

          {menu.map(item => (
            <TouchableOpacity style={styles.btnWithoutIcon} onPress={openSheet}>
              <Text style={styles.btnText}>{item.title}</Text>
              <Text style={styles.btnDesc}>{item.desc}</Text>
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
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16
  },
  avatar: {
    width: 64,
    height: 64,
    backgroundColor: Colors.primary[50],
    borderRadius: 32,
    position: 'relative'
  },
  avatarText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -8 }],
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    color: 'white'
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 25
  },
  customerID: {
    lineHeight: 20,
    fontSize: 14,
    color: Colors.neutral[50]
  },
  btnWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    paddingVertical: 20
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.15,
    color: Colors.neutral[30]
  },
  btnWithoutIcon: {
    paddingVertical: 20
  },
  btnDesc: {
    color: Colors.neutral[50],
    lineHeight: 16,
    fontSize: 12
  }
})
