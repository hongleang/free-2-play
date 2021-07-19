

const Dropdown = (props) => {
  const dropDownItems = props.items.map((item) => {
    return (
      <option value={item}>{item}</option>
    )
  });

  return(  
    <div>
      
    </div>
  )
  
}

export default Dropdown;