import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';

const Start = ({ navigation }) => {
    const [name, setName] = useState('');
    const [background, setBackground] = useState('');
    const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/BackgroundImage.png')} style={styles.bgImage} resizeMode="cover">
                <Text style={styles.appTitle}>Chat App</Text>
                <View style={styles.box}>
                    {/* Input user name \*/}

                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={setName}
                        placeholder='Your Name'
                    />
                    <Text style={styles.chooseBackgroundColor}>Choose Background Color</Text>
                    {/* Choose background color of chat \*/}
                    <View style={styles.colorButtonsBox}>
                        {colors.map((color, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.colorButton, { backgroundColor: color }, background === color && styles.selected]}
                                onPress={() => setBackground(color)}
                            />
                        ))}
                    </View>
                    {/* Start Chat \*/}
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chat', { name: name, background: background })}>
                        <Text style={styles.buttonText}>Start Chatting</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    appTitle: {
        fontSize: 45,
        fontWeight: '600',
        color: '#ffffff',
        margin: 20
    },
    box: {
        backgroundColor: '#ffffff',
        padding: 30,
        width: '88%',
        height: '44%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
        width: '88%',
        opacity: 50,
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
        borderColor: '#757083'
    },
    chooseBackgroundColor: {
        flex: 1,
        fontSize: 16,
        fontWeight: '300',
        color: '#757083',
    },
    colorButtonsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    colorButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },
    selected: {
        borderColor: 'black',
        borderWidth: 1
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#757083',
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff'
    }
});

export default Start;