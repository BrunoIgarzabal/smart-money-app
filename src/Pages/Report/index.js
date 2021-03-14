import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native'

import BalanceLabel from '../../Components/BalanceLabel';
import EntrySummary from '../../Components/EntrySummary';
import EntryList from '../../Components/EntryList';
import { Picker } from '@react-native-community/picker';
import Colors from '../../styles/Colors';

import ActionFooter, { ActionPrimaryButton } from '../../Components/Core/ActionFooter';

import Icon from 'react-native-vector-icons/MaterialIcons';
import RelativeDaysModal from '../../Components/RelativeDaysModal';
import CategoryModal from '../../Components/CategoryModal';

const Report = ({ navigation }) => {
    const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false);
    const [categoryModalVisible, setCategoryModalVisible] = useState(false);

    const [relativeDays, setRelativeDays] = useState(7);
    const [category, setCategory] = useState({id: null, name: 'Todas Categorias'});

    const onRelativeDaysPress = item => {
        setRelativeDays(item);
        onRelativeDaysClosePress();
    }

    const onCategoryPress = item => {
        setCategory(item);
        onCategoryClosePress();
    }

    const onRelativeDaysClosePress = () => {
        setRelativeDaysModalVisible(false);
    }

    const onCategoryClosePress = () => {
        setCategoryModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <BalanceLabel />
            <View style={styles.filtersContainer}>
                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => {
                        setRelativeDaysModalVisible(true);
                    }}
                >
                    <Text style={styles.filterButtonText}>{`Últimos ${relativeDays} dias`}</Text>
                    <Icon 
                        name="keyboard-arrow-down"
                        size={20}
                        color={Colors.champagneDark}
                    />
                </TouchableOpacity>
                <RelativeDaysModal 
                    isVisible={relativeDaysModalVisible}
                    onConfirm={onRelativeDaysPress}
                    onCancel={onRelativeDaysClosePress}
                />

                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => {
                        setCategoryModalVisible(true);
                    }}
                >
                    <Text style={styles.filterButtonText}>{category.name}</Text>
                    <Icon 
                        name="keyboard-arrow-down"
                        size={20}
                        color={Colors.champagneDark}
                    />
                </TouchableOpacity>

                <CategoryModal 
                    categoryType="all"
                    isVisible={categoryModalVisible}
                    onConfirm={onCategoryPress}
                    onCancel={onCategoryClosePress}
                />
            </View>
            <ScrollView>
                <EntrySummary days={relativeDays} />
                <EntryList days={relativeDays} category={category} />
            </ScrollView>
            <ActionFooter>
                <ActionPrimaryButton 
                    title="Fechar"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
            </ActionFooter>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5
    },
    filterButton: {
        flexDirection: 'row',
        borderColor: Colors.champagneDark,
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    filterButtonText: {
        color: Colors.champagneDark,
    }
})

export default Report;
