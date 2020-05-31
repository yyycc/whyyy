import React, { useState } from 'react';

export default function Cyy() {
  let [light, changeLight] = useState(false);
  let [age, setAge] = useState(42);
  return (
    <div>
      <button onClick={() => setAge(++age)}/>
      <button onClick={() => changeLight(!light)}/>
      {!light && <p>{age}</p>}
      {light && <p>age: {age}</p>}
    </div>
  );
};

