const Dropdown = (props) => {
  const { items, handleChange } = props;
 
  return(
    <div>
      <select onChange={ (evt) => handleChange(evt.target.value) }>
        {
          items.map( (item,index) => {
            return(<option key={index} value={item}>{item}</option>);
          })
        }
      </select>
    </div>
  )
}

export default Dropdown;