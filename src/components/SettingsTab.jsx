import React from 'react'

const SettingsTab = ({ data, setData }) => {
  const handleThemeChange = (e) => {
    setData(prevData => (
      {
        ...prevData,
        theme: e.target.value
      }
    ))
  }
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value={"dark"}
            name='theme'
            checked={data.theme === "dark"}
            onChange={(e) => handleThemeChange(e)}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value={"light"}
            name='theme'
            checked={data.theme === "light"}
            onChange={(e) => handleThemeChange(e)}
          />
          Light
        </label>
      </div>
    </div>
  )
}

export default SettingsTab