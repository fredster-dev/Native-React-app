import { Button, Label } from '@react-navigation/elements';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Flytta allt till toppen
        alignItems: 'flex-end', // Placera allt till höger
        padding: 50, // Överdrivet mycket padding
        backgroundColor: '#ff69b4', // Skärande rosa bakgrund
    },
    title: {
        fontSize: 12, // För liten text
        fontWeight: 'bold',
        marginBottom: 5, // Nästan ingen marginal
        color: '#00ff00', // Grön text på rosa bakgrund
        textAlign: 'right', // Texten är högerjusterad
    },
    label: {
        marginTop: 20,
        marginBottom: 5,
        fontSize: 10, // Väldigt liten text
        fontWeight: '600',
        color: '#ff0000', // Röd text
        alignSelf: 'flex-end', // Placera texten till höger
    },
    regtext: {
        fontSize: 20, // För stor text
        color: '#0000ff', // Blå text
        fontWeight: '900', // För tung text
    },
    regtextLabel: {
        fontSize: 8, // Nästan oläslig text
        fontWeight: '300', // Väldigt tunn text
        color: '#ffff00', // Gul text
        marginRight: 20, // Onödigt mycket marginal
    },
    regtextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Sprid ut allt
        alignItems: 'flex-start', // Placera allt högst upp
        marginTop: 50, // Onödigt mycket marginal
    },
    input: {
        width: '50%', // För smalt inputfält
        padding: 5, // För lite padding
        borderColor: '#000', // Svart kant
        borderWidth: 3, // För tjock kant
        borderRadius: 0, // Ingen rundning
        marginBottom: 20, // För mycket marginal
        backgroundColor: '#ffffe0', // Ljusgul bakgrund
        color: '#ff00ff', // Svår textfärg
    },
    button: {
        backgroundColor: '#000', // Svart bakgrund
        padding: 5, // För liten knapp
        borderRadius: 50, // Överdrivet rundad knapp
        alignItems: 'center',
        width: '30%', // För liten bredd
        height: 30, // För låg höjd
    },
    buttonText: {
        color: '#ff0000', // Röd text
        fontSize: 8, // Väldigt liten text
        fontWeight: '900', // För tung text
    },
    errorText: {
        color: '#00ffff', // Cyan text
        fontSize: 20, // För stor text
        marginBottom: 50, // För mycket marginal
        textAlign: 'left', // Felplacerad text
    },
});

export default styles;