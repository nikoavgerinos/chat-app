import { useEffect, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat, Bubble, InputToolbar, renderActions } from "react-native-gifted-chat";
import { collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomActions from "./CustomActions";
import MapView from 'react-native-maps';



const Chat = ({ route, navigation, db, isConnected }) => {
    const { name, background, userID } = route.params;
    const [messages, setMessages] = useState([]);
    const onSend = (newMessages) => {
        addDoc(collection(db, "messages"), newMessages[0])
    }

    // Customize speech bubble
    const renderBubble = (props) => {
        return <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: "#757083"
                },
                left: {
                    backgroundColor: "#FFF"
                }
            }}
        />
    }
    const renderInputToolbar = (props) => {
        if (isConnected) return <InputToolbar {...props} />;
        else return null;
    }



    // Set user name
    useEffect(() => {
        navigation.setOptions({ title: name });
    }, []);

    // Messages database

    let unsubMessages;

    useEffect(() => {
        if (isConnected === true) {
            const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
            unsubMessages = onSnapshot(q, (documentSnapshot) => {
                let newMessages = [];
                documentSnapshot.forEach(doc => {
                    newMessages.push({
                        id: doc.id,
                        ...doc.data(),
                        createdAt: new Date(doc.data().createdAt.toMillis())
                    })
                });
                setMessages(newMessages);
                cachedMessageHistory(newMessages);
            });
        } else loadCachedMessages();

        // Clean up code
        return () => {
            if (unsubMessages) unsubMessages();
        }
    }, [isConnected]);

    const loadCachedMessages = async () => {
        const cachedMessageHistory = await AsyncStorage.getItem("chat_messages");
        if (cachedMessageHistory) {
            setMessages(JSON.parse(cachedMessageHistory));
        }
    }


    const cachedMessageHistory = async (messagesToCache) => {
        try {
            await AsyncStorage.setItem('chat_messages', JSON.stringify(messagesToCache));
        } catch (error) {
            console.log(error.message);
        }
    }

    const renderCustomActions = (props) => {
        return <CustomActions {...props} />;
    }

    const renderCustomView = (props) => {
        const { currentMessage } = props;
        if (currentMessage.location) {
            return (
                <MapView
                    style={{
                        width: 150,
                        height: 100,
                        borderRadius: 13,
                        margin: 3
                    }}
                    region={{
                        latitude: currentMessage.location.latitude,
                        longitude: currentMessage.location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.421,
                    }}
                />


            );
            return null;
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: background }]}>

            <GiftedChat
                messages={messages}
                renderBubble={renderBubble}
                renderInputToolbar={renderInputToolbar}
                onSend={messages => onSend(messages)}
                renderActions={renderCustomActions}
                renderCustomView={renderCustomView}
                user={{
                    _id: userID,
                    name
                }}
            />
            {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Chat;