import React, { useState, useEffect } from 'react'
import { StyleSheet, Animated, Easing } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import { View, Text } from '../../../../components/themed'
import { Header } from '../../../../components/Header'
import { Container } from '../../../../components/Container'
import { SheetEmpty } from '../../../../components/Sheets/SheetEmpty'

import { useSheet } from '../../../../hooks/useSheet'

export default () => {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [scanAnimation] = useState(new Animated.Value(0))
  const { sheetRef, openSheet } = useSheet()

  const startScanAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnimation, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true
        }),
        Animated.timing(scanAnimation, {
          toValue: 0,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ])
    ).start()
  }

  const translateY = scanAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 250]
  })

  useEffect(() => {
    ; (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
    openSheet()
    startScanAnimation()
  }, [])

  const handleBarCodeScanned = () => {
    setScanned(true)
    openSheet()
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <>
      <Container>
        <Header title='Scan QR' />
        <View style={styles.container}>
          <View style={styles.scanLineContainer}>
            <Animated.View
              style={{
                ...styles.scanLine,
                transform: [{ translateY }]
              }}
            />
          </View>
          <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.barCodeScanner} />
        </View>
      </Container>
      <SheetEmpty ref={sheetRef} snapPoint={['90%']} onDismiss={() => setScanned(false)}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione a animi, accusamus necessitatibus maiores molestias quaerat sed quis vero ipsum tenetur eum
          mollitia nihil perferendis architecto nulla quia quasi minima odio cumque doloremque corporis corrupti. Tempore explicabo expedita distinctio corrupti, eligendi,
          obcaecati, dolore dignissimos totam dolor esse aut? Rem deserunt veritatis nesciunt delectus accusamus deleniti labore eos, saepe sunt eius similique quisquam
          reprehenderit nulla architecto quas assumenda voluptatibus, illo debitis earum ullam aperiam mollitia ab quaerat nihil? Voluptate maiores quae doloribus vero quas sit
          necessitatibus ullam qui eos sed architecto nesciunt aut omnis saepe, soluta dicta nam consequuntur debitis. Cum quos dignissimos vero id quia. Inventore praesentium
          dolore quae modi, iure natus totam quo ratione odio repellat aliquam tempore ab maiores corrupti iste, minus vitae facere aperiam laudantium voluptatum eos illum ipsum.
          Officiis, est! Accusamus cupiditate doloribus ducimus cumque, illum nesciunt deserunt corrupti repellendus sit a possimus, amet alias facere odio. Hic id consequuntur
          aliquam veritatis repudiandae quae quo maiores, deleniti aliquid eligendi, adipisci reprehenderit reiciendis. Suscipit necessitatibus ipsa sint cumque ab possimus
          explicabo inventore, magnam ut earum voluptatum esse accusantium! Hic illum iure deleniti deserunt ipsum culpa amet nihil nisi, iste error placeat excepturi voluptatum,
          quas, tempora consequuntur.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione a animi, accusamus necessitatibus maiores molestias quaerat sed quis vero ipsum tenetur eum
          mollitia nihil perferendis architecto nulla quia quasi minima odio cumque doloremque corporis corrupti. Tempore explicabo expedita distinctio corrupti, eligendi,
          obcaecati, dolore dignissimos totam dolor esse aut? Rem deserunt veritatis nesciunt delectus accusamus deleniti labore eos, saepe sunt eius similique quisquam
          reprehenderit nulla architecto quas assumenda voluptatibus, illo debitis earum ullam aperiam mollitia ab quaerat nihil? Voluptate maiores quae doloribus vero quas sit
          necessitatibus ullam qui eos sed architecto nesciunt aut omnis saepe, soluta dicta nam consequuntur debitis. Cum quos dignissimos vero id quia. Inventore praesentium
          dolore quae modi, iure natus totam quo ratione odio repellat aliquam tempore ab maiores corrupti iste, minus vitae facere aperiam laudantium voluptatum eos illum ipsum.
          Officiis, est! Accusamus cupiditate doloribus ducimus cumque, illum nesciunt deserunt corrupti repellendus sit a possimus, amet alias facere odio. Hic id consequuntur
          aliquam veritatis repudiandae quae quo maiores, deleniti aliquid eligendi, adipisci reprehenderit reiciendis. Suscipit necessitatibus ipsa sint cumque ab possimus
          explicabo inventore, magnam ut earum voluptatum esse accusantium! Hic illum iure deleniti deserunt ipsum culpa amet nihil nisi, iste error placeat excepturi voluptatum,
          quas, tempora consequuntur.
        </Text>
      </SheetEmpty>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: -24,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scanLine: {
    width: 250,
    height: 2,
    backgroundColor: 'white'
  },
  scanLineContainer: {
    zIndex: 1,
    position: 'absolute',
    width: 250,
    height: 250,
    borderWidth: 0.5,
    borderColor: 'gray'
  },
  barCodeScanner: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})
