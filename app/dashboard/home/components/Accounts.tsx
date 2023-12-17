import { TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'

import { useSheet } from '../../../../hooks/useSheet'
import { TextStyles } from '../../../../constants'
import { convertCurrency } from '../../../../utils/convertCurrency'
import Colors from '../../../../constants/Colors'

import { BlueBankCard } from '../../../../assets/icons/blue-bank-card'
import { SheetEmpty } from '../../../../components/Sheets/SheetEmpty'
import { Text, View } from '../../../../components/themed'

export const Accounts = () => {
  const { sheetRef, openSheet } = useSheet()
  const data = [
    {
      title: 'Bluebank Choise',
      amount: 2147,
      type: 'Choice'
    },
    {
      title: 'Bluebank Life',
      amount: 1257208,
      type: 'Life'
    }
  ]

  return (
    <>
      <View style={styles.accountContainer}>
        <View style={styles.accountTitle}>
          <Text
            style={{
              ...TextStyles.TextHeading[4]
            }}
          >
            Accounts
          </Text>
          <TouchableOpacity onPress={openSheet}>
            <Text style={styles.addBtn}>Add</Text>
          </TouchableOpacity>
        </View>
        {data.map((item, i) => (
          <Link key={i} href={`/dashboard/home/${item.type}`} asChild>
            <TouchableOpacity style={styles.cardContainer}>
              <BlueBankCard type={item.type as 'Choice' | 'Life'} />
              <View style={{ gap: 4, flex: 1 }}>
                <Text style={styles.cardType}>{item.title}</Text>
                <Text style={styles.cardAmount}>{convertCurrency(item.amount)}</Text>
              </View>
              <Feather name='arrow-right' size={24} color={Colors.primary[50]} />
            </TouchableOpacity>
          </Link>
        ))}
        <TouchableOpacity style={styles.totalBtn} onPress={openSheet}>
          <Text style={styles.totalBtnText}>View account total</Text>
        </TouchableOpacity>
      </View>

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
  accountContainer: {
    gap: 8,
    marginBottom: 24
  },
  accountTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addBtn: {
    ...TextStyles.TextBody['2-sb'],
    color: Colors.primary[50]
  },
  cardContainer: {
    padding: 16,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center'
  },
  cardType: {
    fontWeight: '500',
    fontSize: 14
  },
  cardAmount: {
    ...TextStyles.TextHeading[3],
    fontWeight: '600'
  },
  totalBtn: {
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  totalBtnText: {
    textAlign: 'center',
    color: Colors.neutral[50],
    ...TextStyles.TextBody['2']
  }
})
