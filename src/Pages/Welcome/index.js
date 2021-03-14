import React, { useState } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Colors from '../../styles/Colors'
import WelcomeBalanceInput from './WelcomeBalanceInput';

import ActionFooter, { ActionPrimaryButton } from '../../Components/Core/ActionFooter';
import { saveEntry } from '../../services/Entries';
import useCategories from '../../hooks/useCategories';
import WelcomeMessage from './WelcomeMessage';

const Welcome = ({ navigation }) => {
    const [,,, initCategories] = useCategories();
    const [amount, setAmount] = useState(0);

    const onSavePress = () => {
        saveEntry({
            amount: amount,
            isInit: true,
            category: initCategories
        });

        navigation.navigate('Main');
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                {/* <Image source={} /> */}
            </View>
            <WelcomeMessage />
            <WelcomeBalanceInput 
                value={amount}
                onChangeValue={setAmount}
            />

            <ActionFooter>
                <ActionPrimaryButton 
                    title="Continuar"
                    onPress={onSavePress}
                />
            </ActionFooter>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10
    },
    logo: {
        alignItems: 'center',
        marginTop: 20
    }
})

export default Welcome
