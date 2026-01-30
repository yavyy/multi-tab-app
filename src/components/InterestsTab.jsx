const InterestsTab = ({ data, setData }) => {
  const { interests } = data
  function handleInterests(e) {
    setData((prev) => (
      {
        ...prev,
        interests: prev.interests.includes(e.target.value) ? prev.interests.filter(i => i !== e.target.value) : [...prev.interests, e.target.value]
      }
    ))
  }
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            value={"coding"}
            checked={interests.includes("coding")}
            onChange={(e) => handleInterests(e)}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value={"gaming"}
            checked={interests.includes("gaming")}
            onChange={(e) => handleInterests(e)}
          />
          Gaming
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value={"music"}
            checked={interests.includes("music")}
            onChange={(e) => handleInterests(e)}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value={"dancing"}
            checked={interests.includes("dancing")}
            onChange={(e) => handleInterests(e)}
          />
          Dancing
        </label>
      </div>

    </div>
  )
}

export default InterestsTab