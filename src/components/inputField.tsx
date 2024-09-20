import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputProps> = ({ label, placeholder, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1.5 text-primary px-8">
      <label className="px-4 font-light">{label}</label>
      <input
        onChange={handleInputChange}
        className="bg-opacity-30 bg-primary placeholder:text-primary py-2 px-4 rounded-2xl font-light"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
