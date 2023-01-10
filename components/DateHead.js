import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function DateHead({date}) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const {top} = useSafeAreaInsets();

    const formatted = `${year}년 ${month}월 ${day}일`;

    return (
        <>
        <View style={[styles.StatusBarPlaceholder, {height: top}]} />
        <StatusBar backgroundColor={'#14274E'}/>
            <View style={styles.block}>
                <Text style={styles.dateText}>{formatted}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    StatusBarPlaceholder: {
        backgroundColor: '#14274E',
    },
    block: {
        padding: 16,
        backgroundColor: '#14274E',
    },
    dateText: {
        fontSize: 24,
        color: 'white',
    }
});

export default DateHead;
