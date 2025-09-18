export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  disabled?: boolean;
  color?: "default" | "white " | " blue";
}
export interface CustomInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  leftIcon?: React.ReactNode;
}
export interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
} 
