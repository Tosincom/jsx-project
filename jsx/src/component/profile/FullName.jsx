import React from 'react';

function FullName() {
  const firstName = "Oluwatosin";
  const middleName = "olawale"
  const lastName  ="Afolabi" ;
  const fullName = `${firstName} ${middleName} ${lastName}`;
  <FullName firstName="Oluwatosin" middleName="Olawale" lastName="Afolabi" />;

  return (
    <div>
      <h1 className='header'>My Jsx project</h1>
      <p>My name is {fullName}.</p>
    </div>
  );
}



export default FullName;


