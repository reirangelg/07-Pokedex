import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/Tab1';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';



interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon(id);

    return (

        <View style={{ flex: 1 }}>

            {/*Header Container*/}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color
            }}>

                {/* Backbutton*/}
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 5
                    }}>

                    <Icon
                        name='arrow-back-outline'
                        size={35}
                        color='#fff'
                    />
                </TouchableOpacity>
                {/* Name del Pokemon*/}

                <Text style={{
                    ...styles.pokemonName,
                    top: top + 45
                }}>
                    {name + '\n'}#{id}
                </Text>

                {/* pokebola blanca*/}

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage}
                />
            </View>

            { /* Detalles y Loading */}

            {
                isLoading
                    ? (
                        <View style={styles.loadingIndicator}>
                            <ActivityIndicator
                                color={color}
                                size={50}
                            />
                        </View>
                    )
                    : <PokemonDetails pokemon={pokemon} />
            }
        </View>
    )
}
const styles = StyleSheet.create({

    headerContainer: {
        height: 250,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: '#fff',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 180,
        bottom: -20,
        opacity: 0.7
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -20
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});