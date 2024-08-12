import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type ListProps = {
    content: string[];
};

const List = ({ content }: ListProps) => {
    return (
        <View>
            {content.map((item: string) => (
                <View style={styles.listItem} key={item}>
                    <Text style={styles.listItemText}>{item}</Text>
                </View>
            ))}
        </View>
    );
};

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497', 
    },
    listItemText: {
        color: '#351401',
        textAlign: 'center'
    }
});
