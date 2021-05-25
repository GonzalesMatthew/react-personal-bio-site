import React from 'react';
import TechForm from '../components/forms/TechForm';

export default function TechnologyEdit() {
  const [techObj, setTechObj] = useState({
    firebaseKey: '',
    name: '',
    description: '',
    image: '',
  });

  return (
    <div>
      Tech Edit
      <TechForm/>
    </div>
  );
}
