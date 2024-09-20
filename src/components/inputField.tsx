import React from 'react';

// Extender a interface InputProps para incluir todos os atributos padrão de um <input>
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onValueChange: (value: string) => void; // Função para mudança de valor
}

const InputField: React.FC<InputProps> = ({ label, onValueChange, ...props }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value); // Chama a função onChange passada por props
  };

  return (
    <div className="flex flex-col gap-1.5 text-primary px-8">
      <label className="px-4 font-light">{label}</label>
      <input
        onChange={handleInputChange} // Usa a função de mudança de valor
        className="bg-opacity-30 bg-primary placeholder:text-primary py-2 px-4 rounded-2xl font-light"
        {...props} // Espalha todas as outras propriedades do input, como placeholder, value, etc.
      />
    </div>
  );
};

export default InputField;
