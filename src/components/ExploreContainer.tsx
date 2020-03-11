import React, { useState } from 'react';
import './ExploreContainer.css';
import axios from 'axios';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  
  const [msg, setMsg] = useState('');

  axios.get('http://localhost:8085')
  .then(resp => setMsg(resp.data.msg));
  
  return (

    <div className="container">
    {msg}
    </div>
  );
};

export default ExploreContainer;
