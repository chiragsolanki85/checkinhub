import { Redirect } from 'expo-router';

export default function Index() {
    // TODO: Check if user has completed onboarding
    // For now, always go to onboarding for demo
    return <Redirect href="/onboarding" />;
}
