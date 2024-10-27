import { Input as AntInput, InputProps } from 'antd';

interface Props extends InputProps {
  placeholder: string;
}

const Input: React.FC<Props> = ({ placeholder, value, onChange, disabled }) => {
  return (
    <AntInput
      placeholder={placeholder}
      value={value}
      onChange={!disabled ? onChange : undefined} // Only set onChange if not disabled
      disabled={disabled} // Pass the disabled prop
    />
  );
};

export default Input;