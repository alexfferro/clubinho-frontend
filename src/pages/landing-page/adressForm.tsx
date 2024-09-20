import React from 'react';
import InputField from '../../components/inputField';


interface AddressFormProps {
  cep: {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  };
  setCEP: (value: string) => void;
  setLocalidade: (value: string) => void;
  setNumber: (value: string) => void;
  setDistrict: (value: string) => void;
  setCity: (value: string) => void;
  setUF: (value: string) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
  cep,
  setCEP,
  setLocalidade,
  setNumber,
  setDistrict,
  setCity,
  setUF
}) => {
  return (
    <div>
      {cep.cep ? (
        <>
          <InputField label="CEP" placeholder="00000-000" onValueChange={setCEP} />
          <InputField
            label="Endereço"
            defaultValue={cep.logradouro}
            placeholder={cep.logradouro || "Logradouro"}
            onValueChange={setLocalidade}
          />
          <InputField
            label="Número"
            placeholder="Informe aqui o número do seu endereço"
            onValueChange={setNumber}
          />
          <InputField
            label="Bairro"
            defaultValue={cep.bairro}
            placeholder="Informe aqui o seu bairro"
            onValueChange={setDistrict}
          />
          <InputField
            label="Cidade"
            defaultValue={cep.localidade}
            placeholder="Cidade"
            onValueChange={setCity}
          />
          <InputField
            label="Estado"
            defaultValue={cep.uf}
            placeholder="Estado"
            onValueChange={setUF}
          />
        </>
      ) : (
        <>
          <InputField label="CEP" placeholder="00000-000" onValueChange={setCEP} />
          <InputField label="Endereço" placeholder="Rua" onValueChange={setLocalidade} />
          <InputField
            label="Número"
            placeholder="Informe aqui o número do seu endereço"
            onValueChange={setNumber}
          />
          <InputField
            label="Bairro"
            placeholder="Informe aqui o seu bairro"
            onValueChange={setDistrict}
          />
          <InputField label="Cidade" placeholder="Cidade" onValueChange={setCity} />
          <InputField label="Estado" placeholder="Estado" onValueChange={setUF} />
        </>
      )}
    </div>
  );
};

export default AddressForm;