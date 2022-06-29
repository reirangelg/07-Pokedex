import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from './Tab1';

import Icon from "react-native-vector-icons/Ionicons";

import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();



export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: '#fff'
            }}
            screenOptions={{
                tabBarActiveTintColor: '#5856d6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba( 255,255,255, 0.6)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 0 : 60
                },
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={ Tab1 }
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name='list-outline'
                        />
                    )
                }}
            />
            <Tab.Screen name="SearchScreen"
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name='search-outline'
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}