import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adressecabinet, setAdresseC] = useState('');
  const [codepostal, setCodeP] = useState('');
  const [telephone, setTelephone] = useState('');
  const [siteweb, setSiteWeb] = useState('');
  const [description, setDescription] = useState('');
  const [pdp,setPdp]=useState('');
  
  const handlePdpChange=(event)=>{
    setPdp(event.target.files[0]);
  }

  const options = [
    { value: '01', name: 'Adrar' },
    { value: '02', name: 'Chlef' },
    { value: '03', name: 'Laghouat' },
    { value: '04', name: 'Oum El Bouaghi' },
    { value: '05', name: 'Batna' },
    { value: '06', name: 'Béjaïa' },
    { value: '07', name: 'Biskra' },
    { value: '08', name: 'Béchar' },
    { value: '09', name: 'Blida' },
    { value: '10', name: 'Bouira' },
    { value: '11', name: 'Tamanrasset' },
    { value: '12', name: 'Tébessa' },
    { value: '13', name: 'Tlemcen' },
    { value: '14', name: 'Tiaret' },
    { value: '15', name: 'Tizi Ouzou' },
    { value: '16', name: 'Alger' },
    { value: '17', name: 'Djelfa' },
    { value: '18', name: 'Jijel' },
    { value: '19', name: 'Sétif' },
    { value: '20', name: 'Saïda' },
    { value: '21', name: 'Skikda' },
    { value: '22', name: 'Sidi Bel Abbès' },
    { value: '23', name: 'Annaba' },
    { value: '24', name: 'Guelma' },
    { value: '25', name: 'Constantine' },
    { value: '26', name: 'Médéa' },
    { value: '27', name: 'Mostaganem' },
    { value: '28', name: 'M\'Sila' },
    { value: '29', name: 'Mascara' },
    { value: '30', name: 'Ouargla' },
    { value: '31', name: 'Oran' },
    { value: '32', name: 'El Bayadh' },
    { value: '33', name: 'Illizi' },
    { value: '34', name: 'Bordj Bou Arreridj' },
    { value: '35', name: 'Boumerdès' },
    { value: '36', name: 'El Tarf' },
    { value: '37', name: 'Tindouf' },
    { value: '38', name: 'Tissemsilt' },
    { value: '39', name: 'El Oued' },
    { value: '40', name: 'Khenchela' },
    { value: '41', name: 'Souk Ahras' },
    { value: '42', name: 'Tipaza' },
    { value: '43', name: 'Mila' },
    { value: '44', name: 'Aïn Defla' },
    { value: '45', name: 'Naâma' },
    { value: '46', name: 'Aïn Témouchent' },
    { value: '47', name: 'Ghardaïa' },
    { value: '48', name: 'Relizane' },
    { value: '49', name: 'El M\'ghair' },
    { value: '50', name: 'El Menia' },
    { value: '51', name: 'Ouled Djellal' },
    { value: '52', name: 'Bordj Baji Mokhtar' },
    { value: '53', name: 'Béni Abbès' },
    { value: '54', name: 'Timimoun' },
    { value: '55', name: 'Touggourt' },
    { value: '56', name: 'Djanet' },
    { value: '57', name: 'In Salah' },
    { value: '58', name: 'In Guezzam' }
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Prénom:
        <input type="text" value={prenom} onChange={e => setPrenom(e.target.value)} />
      </label>
      <label>
      Adresse de votre cabinet:
        <input type="text" value={adressecabinet} onChange={e => setAdresseC(e.target.value)} />
      </label>
      <label>
        Code Postal:
        <input type="text" value={codepostal} onChange={e => setCodeP(e.target.value)} />
      </label>
      <label>
        Ville:
        <select>
      {options.map((option) => (
        <option key={option.value} value={option.value} >{option.name}</option>
      ))}
      </select>
      </label>
      <label>
      Téléphone:
        <input type="text" value={telephone} onChange={e => setTelephone(e.target.value)} />
      </label>
      <label>
      Site web:
        <input type="text" value={siteweb} onChange={e => setSiteWeb(e.target.value)} />
      </label>
      <label>
      Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button type="submit">Envoyer</button>
      <label>
        Importer une photo de profil :
        <input type="file" accept="image/*" onChange={handlePdpChange} />
      </label>
    </form>
  );
};

export default Form;

