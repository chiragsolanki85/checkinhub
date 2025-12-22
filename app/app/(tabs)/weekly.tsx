import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WeeklyScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white dark:bg-black">
            <ScrollView className="p-4">
                <Text className="text-2xl font-bold text-black dark:text-white mb-4">Weekly Check In</Text>
                <View className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl items-center justify-center border-2 border-dashed border-blue-200 dark:border-blue-800">
                    <Text className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Ready to check in?</Text>
                    <Text className="text-center text-gray-600 dark:text-gray-300 mb-4">
                        Reflect on your week, log measurements, and set goals for next week.
                    </Text>
                    <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-full">
                        <Text className="text-white font-bold">Start Check In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
