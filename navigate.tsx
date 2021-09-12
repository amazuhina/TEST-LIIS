import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './screens/main-screen';
import { TaskScreen } from './screens/task-screen';
import { SettingScreen } from './screens/setting-screen';


const Stack = createNativeStackNavigator()


export const ScreenNames = {
    TaskScreen: 'task-screen',
    MainScreen: 'main-screen',
    SettingScreen: 'setting-screen'
}

export const Navigate = () => {

    return (
        <Stack.Navigator
            initialRouteName={'App'}
        >
            <Stack.Screen
                name={ScreenNames.MainScreen}
                component={MainScreen}
                options={
                    {
                        title: 'Главная',
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name={ScreenNames.TaskScreen}
                component={TaskScreen}
                options={
                    {
                        title: 'Заметка',
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name={ScreenNames.SettingScreen}
                component={SettingScreen}
                options={
                    {
                        title: 'Setting',
                        headerShown: false,
                    }
                }
            />
        </Stack.Navigator>
    )
}



