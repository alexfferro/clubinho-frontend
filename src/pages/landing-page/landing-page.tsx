import { CirclePlus} from "lucide-react";
import { useState, type FormEvent } from "react";
import { api } from "../../lib/axios";
import useViaCep from '@rsiqueira/use-viacep';
import { Header } from "./header";
import { IntroAndVideo } from "./introAndVideo";
import { Footer } from "./footer";
import InputField from "../../components/inputField";
import AddressForm from "./adressForm";
import MyDateSelector from "../../components/dateSelector";

interface Childs{
  id: number
  childName: string
  age: string
  gender: string
}

export function LandingPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [CEP, setCEP] = useState('')
  const [localidade, setLocalidade] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUF] = useState('')
  const [number, setNumber] = useState('')
  const [childName, setChildName] = useState('')
  const [age, setAge] = useState('')
  const [myChilds, setMyChilds] = useState<Childs[]>([])
  const [toggleBoyCard, setToggleBoyCard] = useState(false)
  const [toggleGirlCard, setToggleGirlCard] = useState(false)
  const { cep } = useViaCep(CEP);

  function addChild(){
    const newChild: Childs = {
      id: myChilds.length + 1,
      childName,
      age,
      gender
    }
    setMyChilds([...myChilds, newChild])
    setToggleBoyCard(false)
    setToggleGirlCard(false)
  }
  function removeChild(id: number){
    const newChildsList = myChilds.filter(child => child.id !== id)
    setMyChilds(newChildsList)
    return ''
  }
  function openBoyCard(){
    setToggleBoyCard(true)
    setToggleGirlCard(false)
  }
  function closeBoyCard(){
    setToggleBoyCard(false)
  }
  function openGirlCard(){
    setToggleBoyCard(false)
    setToggleGirlCard(true)
  }
  function closeGirlCard(){
    setToggleGirlCard(false)
  }
  async function SubmitForm(event : FormEvent<HTMLFormElement>){
      event.preventDefault()

      if(!fullName) {
        return
      }
      if(!email) {
        return
      }
      if(myChilds.length === 0 ){
        return
      }

      const response = await api.post('/submit', {
        fullName,
        phone,
        email,
        address: {
          cep: cep.cep,
          logradouro: localidade,
          number,
          district,
          city,
          uf
        },
        childs: myChilds
        
      })
      console.log(response.data)
    }
  
  return (
    <div className="min-w-xl space-y-6">
      <Header />
      <main>
        <div className="space-y-6">
          <IntroAndVideo />
          <h2 className="text-[26px] leading-[30px] font-bold text-primary pt-3 text-center">Faça agora o seu cadastro <br/> e garanta o seu desconto!</h2>
          <form className="max-w-[540px] mx-auto space-y-2" onSubmit={SubmitForm}>
              <InputField label="Nome Completo" placeholder="Informe aqui o seu nome completo" onValueChange={setFullName}/>
              <InputField label="Telefone" placeholder="(82) 9 9999-9999" onValueChange={setPhone}/>
             <InputField label="E-mail" placeholder="Informe aqui o seu melhor e-mail" onValueChange={setEmail}/>
              <AddressForm
                cep={cep}
                setCEP={setCEP}
                setCity={setCity}
                setDistrict={setDistrict}
                setLocalidade={setLocalidade}
                setNumber={setNumber}
                setUF={setUF}
              />
              <div className="flex items-baseline justify-center gap-1.5">
                <h2 className="text-[24px] font-bold text-primary">Cadastre aqui o seu </h2> 
                <img src="/clubinho.svg" alt="clubinho" className=""/> 
              </div>             
              <div>
              {
                  toggleBoyCard || toggleGirlCard 
                   ? 
                   (toggleBoyCard) 
                   ?
                   <div className="flex flex-col gap-1.5 text-primary">
                    <InputField label="Nome Completo" placeholder="Informe aqui o nome completo" onValueChange={(event)=>{
                      setChildName(event)
                      setGender('M')
                    }} />
                    <MyDateSelector variant="secondary" onDateChange={setAge}/>

                    <div className="flex items-center justify-center gap-3">
                      <button 
                      className="bg-opacity-30 bg-primary rounded-2xl text-primary h-[35px] w-[140px] hover:bg-primary hover:text-[#fff]"
                      type="button" 
                      onClick={addChild}>
                        Confirmar  
                      </button>
                      <button 
                      className="bg-opacity-60 bg-secondary rounded-2xl text-[#D46060] h-[35px] w-[140px] hover:bg-secondary hover:text-[#fff]"
                      type="button" 
                      onClick={closeBoyCard}>
                        Excluir cadastro  
                      </button>
                    </div> 
                   </div>
                   :
                   <div className="flex flex-col gap-1.5 text-secondary px-8">
                    <label className="px-4 font-light">Nome Completo</label>
                    <input
                      onChange={(event) => {
                      setChildName(event.target.value)
                      setGender('F')
                      }}
                      className="bg-opacity-30 bg-secondary placeholder:text-secondary py-2 px-4 rounded-2xl font-light"
                      type="text"
                      placeholder="Informe aqui o nome completo"/>
                    <input type="date" className="px-4" onChange={event => setAge(event.target.value)} />
                    <div className="flex items-center justify-center gap-3">
                      <button 
                      className="bg-opacity-30 bg-primary rounded-2xl text-primary h-[35px] w-[140px] hover:bg-primary hover:text-[#fff]"
                      type="button" 
                      onClick={addChild}>
                        Confirmar  
                      </button>
                      <button 
                      className="bg-opacity-60 bg-secondary rounded-2xl text-[#D46060] h-[35px] w-[140px] hover:bg-secondary hover:text-[#fff]"
                      type="button" 
                      onClick={closeGirlCard}>
                        Excluir cadastro  
                      </button>
                    </div> 
                   </div>
                   : ''
                }
              </div>
              {
                myChilds.map((child)=> 
                (
                  child.gender === 'M'
                  ?
                  <div key={child.id} className="flex flex-col gap-1.5 text-primary px-8">
                    <label className="px-4 font-light">Nome Completo</label>
                    <input 
                      disabled
                      className="bg-opacity-30 bg-primary placeholder:text-primary py-2 px-4 rounded-2xl font-light"
                      type="text"
                      placeholder={child.childName}/>
                    <input type="date" className="px-4" value={child.age} readOnly />
                    <div className=" flex items-center justify-center">
                      <button
                      className="bg-opacity-60 bg-secondary rounded-2xl text-[#D46060] h-[35px] w-[140px] hover:bg-secondary hover:text-[#fff]"
                      type="button"
                      onClick={()=>{removeChild(child.id)}}>
                        Excluir cadastro
                      </button>
                    </div>
                  </div>
                  :
                  <div key={child.id} className="flex flex-col gap-1.5 text-secondary px-8">
                  <label className="px-4 font-light">Nome Completo</label>
                  <input
                    disabled
                    className="bg-opacity-30 bg-secondary placeholder:text-secondary py-2 px-4 rounded-2xl font-light"
                    type="text"
                    placeholder={child.childName}/>
                  <input type="date" className="px-4" value={child.age} readOnly />
                  <div className=" flex items-center justify-center">
                      <button
                      className="bg-opacity-60 bg-secondary rounded-2xl text-[#D46060] h-[35px] w-[140px] hover:bg-secondary hover:text-[#fff]"
                      type="button"
                      onClick={()=>{removeChild(child.id)}}>
                        Excluir cadastro
                      </button>
                    </div>       
                  </div>
                )
               )
              }
              <div className="flex flex-col gap-2.5 px-8">
                  <button
                  onClick={openBoyCard} 
                  type='button' 
                  className="flex items-center justify-between bg-opacity-30 bg-primary px-4 py-1.5 rounded-2xl text-primary font-light hover:bg-primary hover:text-[#fff]">
                    Adicionar Menino
                    <CirclePlus className="size-5"/>
                  </button>
                  <button 
                  onClick={openGirlCard} 
                  type='button' 
                  className="flex items-center justify-between bg-opacity-30 bg-secondary px-4 py-1.5 rounded-2xl text-secondary font-light hover:bg-secondary hover:text-[#fff]">
                    Adicionar Menina
                    <CirclePlus className="size-5"/>
                  </button>
              </div>
              <div className="flex items-center justify-center">
                <button
                className="bg-opacity-30 bg-secondary px-10 py-1.5 rounded-2xl text-terciary hover:bg-terciary hover:text-[#fff] text-3xl font-bold">
                  Finalizar Cadastro
                </button>
              </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}