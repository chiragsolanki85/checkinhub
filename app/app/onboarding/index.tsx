import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
    const router = useRouter();

    const handleGoalSelect = (goal: string) => {
        // TODO: Save goal to state/storage
        console.log('Selected goal:', goal);
        // Navigate to main app
        router.replace('/(tabs)');
    };

    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-black p-6 justify-center">
            <View className="mb-10">
                <Text className="text-3xl font-bold text-black dark:text-white mb-2">Welcome to Check In Hub</Text>
                <Text className="text-lg text-gray-600 dark:text-gray-400">What is your primary goal?</Text>
            </View>

            <View className="space-y-4 gap-4">
                <TouchableOpacity
                    className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                    onPress={() => handleGoalSelect('lose_weight')}
                >
                    <Text className="text-xl font-semibold text-black dark:text-white">Lose Weight</Text>
                    <Text className="text-gray-500 dark:text-gray-400 mt-1">I want to reach a healthy weight.</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                    onPress={() => handleGoalSelect('gain_weight')}
                >
                    <Text className="text-xl font-semibold text-black dark:text-white">Gain Weight</Text>
                    <Text className="text-gray-500 dark:text-gray-400 mt-1">I want to build muscle or mass.</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                    onPress={() => handleGoalSelect('maintain')}
                >
                    <Text className="text-xl font-semibold text-black dark:text-white">Stay Healthy</Text>
                    <Text className="text-gray-500 dark:text-gray-400 mt-1">I want to maintain my lifestyle.</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
