const dropDownItems = items => items.map((item) => {
  return (
    <option key={item} value={item}>{item}</option>
  )
});

const Dropdown = (props) => {
  return(  
    <div>
    <select onChange={event => props.handleChange(props.type, event)}>
      {dropDownItems(props.items)}
    </select>
    </div>
  )
  
}

export default Dropdown;