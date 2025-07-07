import { SignUp } from '@clerk/clerk-expo';
import { View } from 'react-native';

export default function SignUpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SignUp routing="expo" />
    </View>
  );
} 