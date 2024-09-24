interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onValueChange: (value: string) => void; // Função para mudança de valor
  variant?: 'secondary'; // Propriedade opcional para indicar a variante outline
}

const InputField: React.FC<InputProps> = ({ label, onValueChange, variant = 'default', ...props }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value); // Chama a função onChange passada por props
  };

  const primary = 'bg-opacity-30 bg-primary placeholder:text-primary py-2 px-4 rounded-2xl font-light';
  const secondary = 'bg-opacity-30 bg-secondary placeholder:text-secondary py-2 px-4 rounded-2xl font-light'

  return (
    <div className={`flex flex-col gap-1.5 px-8 ${variant === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
      <label className="px-4 font-light">{label}</label>
      <input
        onChange={handleInputChange}
        className={`${variant === 'secondary' ? secondary : primary}`}
        {...props}
      />
    </div>
  );
};

export default InputField;