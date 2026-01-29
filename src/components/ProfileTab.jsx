import React from 'react'

const ProfileTab = ({ data, setData }) => {
  const { name, age, email } = data;
  function handleUserProfileChange(e, item) {
    setData(prev => (
      {
        ...prev,
        [item]: e.target.value
      }
    ))
  }
  console.log(data)
  return (
    <div className='form-container'>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id='name'
          value={name}
          onChange={(e) => handleUserProfileChange(e, "name")}
          placeholder='Enter your name' />
      </div>
      <div>
        <label htmlFor="age">Name : </label>
        <input
          type="number"
          id='age'
          value={age}
          onChange={(e) => handleUserProfileChange(e, "age")}
          min={9}
          max={45} />
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => handleUserProfileChange(e, "email")}
          placeholder='john@example.com' />
      </div>
    </div>
  )
}

export default ProfileTab