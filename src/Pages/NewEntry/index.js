import React, { useState } from 'react'
import { View,  StyleSheet } from 'react-native'

import BalanceLabel from '../../Components/BalanceLabel';
import ActionFooter, { ActionPrimaryButton, ActionSecondaryButton } from '../../Components/Core/ActionFooter';
import Colors from '../../styles/Colors';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';
import NewEntryInput from './NewEntryInput';

import useEntries from '../../hooks/useEntries';
import NewEntryAddressPicker from './NewEntryAddressPicker';
import NewEntryCameraPicker from './NewEntryCameraPicker';

const NewEntry = ({ navigation }) => {

    const entry = navigation.getParam('entry', {
        id: null,
        amount: 0,
        category: {id: null, name: 'Selecione'},
        entryAt: new Date(),
        address: null,
        latitude: null,
        longitude: null,
        photo: null
    });

    const [, saveEntry, deleteEntry] = useEntries();

    const [debit, setDebit] = useState(entry.amount <= 0);
    const [amount, setAmount] = useState(entry.amount);
    const [category, setCategory] = useState(entry.category);
    const [entryAt, setEntryAt] = useState(entry.entryAt);
    const [address, setAddress] = useState(entry.address);
    const [latitude, setLatitude] = useState(entry.latitude);
    const [longitude, setLongitude] = useState(entry.longitude);
    const [photo, setPhoto] = useState(entry.photo);

    const isValid = () => {
        if (parseFloat(amount) !== 0) {
            return true;
        }
        return false;
    }

    const onSave = () => {
        const data = {
            amount: parseFloat(amount),
            category: category,
            entryAt: entryAt,
            address: address,
            latitude: latitude,
            longitude: longitude,
            photo: photo
        }

        console.log('NewEntry :: save: ', data);
        saveEntry(data, entry);
        onClose();
    }

    const onDelete = () => {
        deleteEntry(entry);
        onClose();
    }

    const onClose = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <BalanceLabel />

            <View style={styles.formContainer}>
                <NewEntryInput 
                    value={amount}
                    onChangeValue={setAmount}
                    onChangeDebit={setDebit}
                />

                <NewEntryCategoryPicker 
                    debit={debit}
                    category={category}
                    onChangeCategory={setCategory}
                />

                <View style={styles.formActionContainer}>
                    <NewEntryDatePicker 
                        value={entryAt}
                        onChange={setEntryAt}
                    />

                    <NewEntryCameraPicker
                        photo={photo}
                        onChangePhoto={setPhoto}
                        
                    />

                    <NewEntryAddressPicker 
                        address={address}
                        onChange={({
                            latitude, longitude, address
                        }) => {
                            setLatitude(latitude);
                            setLongitude(longitude);
                            setAddress(address);
                        }}
                    />

                    <NewEntryDeleteAction 
                        onOkPress={onDelete}
                        entry={entry}
                    />
                </View>
                
                
            </View>

            <ActionFooter>
                <ActionPrimaryButton 
                    title={entry.id ? 'Salvar' : 'Adicionar'}
                    onPress={() => {
                        isValid() && onSave();
                    }}
                />
                <ActionSecondaryButton
                    title="Cancelar"
                    onPress={onClose} 
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
    formContainer: {
        flex: 1,
        paddingVertical: 20
    },
    formActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    }
});

export default NewEntry;
