import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Demo() {
    const navigate = useNavigate();

    const handleClick = () => {
      // Replace "/your-url-here" with the actual URL you want to redirect the user to
      navigate('https://www.google.co.in/maps/place/Aga+Khan+Palace/@18.5524942,73.898876,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c11768711b1b:0xac1ba97447d569f4!8m2!3d18.5524942!4d73.9014563!16zL20vMGI4MTFj');
    };
  
    return (
      <div>
        <button onClick={handleClick}>Go to another page</button>
      </div>
    );
}
