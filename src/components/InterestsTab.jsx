const InterestsTab = ({ data, setData }) => {
  const { interests } = data
  function handleInterests(e) {
    setData((prev) => (
      {
        ...prev,
        interests: prev.interests.includes(e.target.value) ? prev.interests.filter(i => i !== e.target.value) : [...prev.interests, e.target.value] 
      }
    ))
    console.log(interests)
  }
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            value={"coding"}
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
            onChange={(e) => handleInterests(e)}
          />
          Dancing
        </label>
      </div>

    </div>
  )
}

export default InterestsTab