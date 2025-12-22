import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DailyScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <ScrollView className="p-4">
        <Text className="text-2xl font-bold text-black dark:text-white mb-4">Today</Text>
        <View className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg mb-4">
          <Text className="text-lg font-semibold text-black dark:text-white">Habits</Text>
          <Text className="text-gray-500 dark:text-gray-400">No habits tracked yet.</Text>
        </View>
        <View className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
          <Text className="text-lg font-semibold text-black dark:text-white">Quick Log</Text>
          <Text className="text-gray-500 dark:text-gray-400">Log water, mood, etc.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
