import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';

const NewEntryDatePicker = ({value, onChange}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const onChangeValue = date => {
        onChange(date);
        onCancel();
    };

    const onCancel = () => {
        setModalVisible(false);
    }

    return (
        <View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Icon name="today" size={30} color={Colors.white} />
            </TouchableOpacity>

            <DateTimePicker 
                mode="date"
                cancelTextIOS="Cancelar"
                isDarkModeEnabled={true}
                headerTextIOS="Data de vencimento"
                confirmTextIOS="Ok"
                date={value}
                isVisible={modalVisible}
                onConfirm={onChangeValue}
                onCancel={onCancel}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.asphalt,
        width: 59,
        height: 59,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    }
})

export default NewEntryDatePicker
