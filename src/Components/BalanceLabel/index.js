import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import useBalance from '../../hooks/useBalance';

import Colors from '../../styles/Colors';

const BalanceLabel = () => {

    const [balance] = useBalance();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            
            <LinearGradient
                colors={[Colors.violet, Colors.blue]}
                style={styles.panel}
            >
                <Text style={styles.value}>${ balance }</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    label: {
        fontSize: 12,
        color: Colors.white
    },
    panel: {
        minWidth: 150,

        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginVertical: 10
    },
    value: {
        fontSize: 28,
        color: Colors.white,
        textAlign: 'center'
    }
})

export default BalanceLabel
