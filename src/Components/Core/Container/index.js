import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';

const Container = ({ title, actionLabelText, actionButtonText, onPressActionButton, children }) => {
    return (
        <View style={styles.container}>
            { title && (
                <Text style={styles.title}>{ title }</Text>
            )}
            { children }
            {(actionLabelText || actionButtonText) && (
                <View style={styles.actionContainer}>
                    {actionLabelText && (
                        <Text style={styles.actionLabel}>{ actionLabelText }</Text>
                    )}

                    { actionButtonText && (
                        <TouchableOpacity style={styles.actionButton} onPress={onPressActionButton}>
                            <Icon name="insert-chart" style={styles.actionButtonIcon} />
                            <Text style={styles.actionButtonText}>{ actionButtonText }</Text>
                        </TouchableOpacity>
                    )}
                    
                </View>
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.asphalt,
        margin: 5,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        padding: 8,
    },
    title: {
        fontSize: 12,
        color: Colors.white,
        marginBottom: 5,
    },
    actionContainer: {
        flexDirection: 'row'
    },
    actionLabel: {
        flex: 1,
        fontSize: 12,
        color: Colors.white,
    },
    actionButton: {
        flexDirection: 'row'
    },
    actionButtonText: {
        fontSize: 12,
        color: Colors.white
    },
    actionButtonIcon: {
        color: Colors.white,
        marginTop: 3,
        marginRight: 2,
    }
})

export default Container
