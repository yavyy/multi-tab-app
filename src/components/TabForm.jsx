import React, { useState } from 'react'
import ProfileTab from './ProfileTab'
import InterestsTab from './InterestsTab'
import SettingsTab from './SettingsTab'

// Always think of a config driven UI for scalability and maintainability
const tabs = [
  {
    name: "Profile",
    component: ProfileTab
  },
  {
    name: "Interests",
    component: InterestsTab
  },
  {
    name: "Settings",
    component: SettingsTab
  }
]
const TabForm = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [userData, setUserData] = useState({
    name: "Yatharth",
    age: 18,
    email: "yatharth@example.com",
    interests: [],
    theme: "" 
  })

  const ActiveTabComponent = tabs[activeTab].component

  return (
    <>
      <div className='tabs-container'>
        {
          tabs.map((t, idx) => (
            <div
              className='tab'
              key={t.name}
              onClick={() => setActiveTab(idx)}
            >
              {t.name}
            </div>
          ))
        }
      </div>
      <div className='current-tab'>
        <ActiveTabComponent data={userData} setData={setUserData} />
      </div>
    </>
  )
}

export default TabForm