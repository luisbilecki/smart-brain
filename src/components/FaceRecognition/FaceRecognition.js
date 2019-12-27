import React from 'react';
import './FaceRecognition.css';

const drawBox = (box, key) => (
  <div key={key} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
);

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {
          boxes.map((box, index) => drawBox(box, index))
        }
      </div>
    </div>
  );
}

export default FaceRecognition;