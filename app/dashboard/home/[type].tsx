import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, TouchableOpacity, Share, FlatList, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { View, Text } from '../../../components/themed'
import { Container } from '../../../components/Container'
import { Header } from '../../../components/Header'
import { PayBtn } from './components/PayBtn'
import { TransferBtn } from './components/TransferBtn'
import { ManageBtn } from './components/ManageBtn'

import { convertCurrency } from '../../../utils/convertCurrency'
import Colors from '../../../constants/Colors'
import { TextStyles } from '../../../constants'

export default () => {
  const { type } = useLocalSearchParams()

  const onShare = async () => {
    await Share.share({
      message: 'BSB 123-234\nAccount No 2345 2345'
    })
  }

  return (
    <Container>
      <Header title={`Bluebank ${type}`} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>
            BSB <Text style={styles.topSubText}>123-234</Text>
          </Text>
          <Text style={styles.topText}>
            Account No <Text style={styles.topSubText}>2345 2345</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={onShare}>
          <Feather name='share-2' size={14} color={Colors.primary[50]} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingVertical: 40 }}>
        <Text
          style={{
            ...TextStyles.TextHeading[1]
          }}
        >
          {convertCurrency(2147)}
        </Text>
        <Text
          style={{
            color: Colors.neutral[50],
            ...TextStyles.TextBody[2]
          }}
        >
          Current balance
        </Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 10, marginBottom: 24 }}>
        <TransferBtn />
        <PayBtn />
        <ManageBtn />
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: Colors.neutral[90]
        }}
      />

      <FlatList
        data={data}
        ListHeaderComponentStyle={{ marginVertical: 24 }}
        ListHeaderComponent={() => (
          <View style={styles.flatListHeader}>
            <Text
              style={{
                ...TextStyles.TextHeading[4]
              }}
            >
              Activity
            </Text>
            <TouchableOpacity>
              <Feather name='search' size={24} color={Colors.primary[50]} />
            </TouchableOpacity>
          </View>
        )}
        renderItem={({ item }) => (
          <>
            <Text
              style={{
                paddingVertical: 8,
                ...TextStyles.TextBody['2-sb']
              }}
            >
              {item.period}
            </Text>
            {item.transactions.map((transaction, i) => (
              <TouchableOpacity style={styles.flatListContainer} key={i}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 16
                  }}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: transaction.image
                    }}
                    width={40}
                    height={40}
                  />
                  <View>
                    <Text style={styles.flatListText}>{transaction.title}</Text>
                    <Text style={styles.flatListSubText}>{transaction.category}</Text>
                  </View>
                </View>

                <Text style={styles.flatLIstAmount}>{convertCurrency(transaction.amount)}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}
        keyExtractor={item => item.period}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  topTextContainer: {
    flexDirection: 'row',
    gap: 12
  },

  topText: {
    color: Colors.neutral[50],
    ...TextStyles.TextBody[2]
  },

  topSubText: {
    color: 'black'
  },

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
  },

  flatListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  flatListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16
  },

  flatListText: {
    textTransform: 'uppercase',
    color: Colors.neutral[40],
    marginBottom: 4,
    ...TextStyles.TextBody[2]
  },

  flatListSubText: {
    color: Colors.neutral[40],
    ...TextStyles.TextBody[3]
  },

  flatLIstAmount: {
    color: 'black',
    ...TextStyles.TextBody[1]
  },

  image: {
    borderRadius: 9999,
    borderWidth: 0.5,
    borderColor: Colors.neutral[90],
    overflow: 'hidden'
  }
})

const data = [
  {
    period: 'Wed 24 Jul - Today',
    transactions: [
      {
        id: '1',
        title: 'WALMART',
        amount: -124.6,
        category: 'Pending',
        image: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/walmart-icon.png'
      },
      {
        id: '2',
        title: 'NIKE STORE',
        amount: -149.99,
        category: 'Shopping',
        image: 'https://i.pinimg.com/originals/5b/99/13/5b99139887bc830277b522d35dc863ae.jpg'
      }
    ]
  },
  {
    period: 'Thu 25 Jul - Tomorrow',
    transactions: [
      {
        id: '3',
        title: 'STARBUCKS',
        amount: -4.75,
        category: 'Food',
        image: 'https://cdn-icons-png.flaticon.com/512/5977/5977591.png'
      },
      {
        id: '4',
        title: 'AMAZON',
        amount: -78.99,
        category: 'Shopping',
        image: 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg'
      }
    ]
  },
  {
    period: 'Fri 26 Jul - Next Day',
    transactions: [
      {
        id: '5',
        title: 'GAS STATION',
        amount: -40.0,
        category: 'Transportation',
        image: 'https://w7.pngwing.com/pngs/1001/70/png-transparent-computer-icons-natural-gas-industrial-gas-industry-miscellaneous-text-trademark.png'
      }
    ]
  }
]
