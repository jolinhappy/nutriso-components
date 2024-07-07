import * as React from 'react';
import { useState } from 'react';
import { Input } from 'SRC/components/ui/Input';
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons';

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = (passwordInputProps: PasswordInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleShowPassword = () => setIsShowPassword(!isShowPassword);
  return (
    <div className="relative">
      <Input
        type={isShowPassword ? 'text' : 'password'}
        {...passwordInputProps}
      />
      {isShowPassword ? (
        <EyeOpenIcon
          className="absolute cursor-pointer right-0 top-0 h-full mr-4"
          onClick={handleShowPassword}
        />
      ) : (
        <EyeNoneIcon
          className="absolute cursor-pointer right-0 top-0 h-full mr-4"
          onClick={handleShowPassword}
        />
      )}
    </div>
  );
};
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
