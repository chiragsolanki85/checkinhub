import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-black items-center justify-center">
            <Text className="text-black dark:text-white">Profile & Settings</Text>
        </SafeAreaView>
    );
}
