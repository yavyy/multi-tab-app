import React, { useState } from 'react'
import ProfileTab from './ProfileTab'
import InterestsTab from './InterestsTab'
import SettingsTab from './SettingsTab'

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    age: 18,
    email: "",
    interests: [],
    theme: ""
  })
  const [errors, setError] = useState({})
  // Always think of a config driven UI for scalability and maintainability
  const tabs = [
    {
      name: "Profile",
      component: ProfileTab,
      validate: () => {
        const err = {}
        if (!userData.name || userData.name.length < 2) {
          err.name = "Name is not valid"
        }
        if (!userData.age || userData.age < 18) {
          err.age = "Age is not valid"
        }
        if (!userData.email || userData.email.length < 2) {
          err.email = "Email is not valid"
        }
        setError(err)

        return err.name || err.age || err.email ? false : true;
      }
    },
    {
      name: "Interests",
      component: InterestsTab,
      validate: () => {
        const err = {}
        if (userData.interests.length < 1) {
          err.interests = "Please pick atleast one interest"
        }
        setError(err)
        return err.interests ? false : true;
      }
    },
    {
      name: "Settings",
      component: SettingsTab,
      validate: () => {
        return true;
      }
    }
  ]

  const ActiveTabComponent = tabs[activeTab].component

  const getUserData = () => {
    console.log(userData)
  }

  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab(activeTab + 1)
    }
  }
  const handlePrevClick = () => {
    setActiveTab(activeTab - 1)
  }

  return (
    <>
      <div className='tabs-container'>
        {
          tabs.map((t, idx) => (
            <div
              className='tab'
              key={t.name}
              onClick={() => tabs[activeTab].validate() && setActiveTab(idx)}
            >
              {t.name}
            </div>
          ))
        }
      </div>
      <div className='current-tab'>
        <ActiveTabComponent data={userData} setData={setUserData} error={errors} />
      </div>
      {activeTab > 0 && <button onClick={handlePrevClick}>prev</button>}
      {activeTab < tabs.length - 1 && <button onClick={handleNextClick}>next</button>}
      {activeTab === tabs.length - 1 && <button onClick={getUserData}>Submit</button>}
    </>
  )
}

export default TabForm