import { SignIn } from '@clerk/clerk-expo';
import { View } from 'react-native';

export default function SignInScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SignIn routing="expo" />
    </View>
  );
} 