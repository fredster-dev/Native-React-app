import { Button, Label } from '@react-navigation/elements';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'flex-start',
    },
    regtext: {
        fontSize: 16,
        color: '#367cf5',
        fontWeight: '600',
    },
    regtextLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginRight: 5,
    },
    regtextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    input: {
        width: '100%',
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#1a77db',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
    },

});

export default styles;