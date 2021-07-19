import Dropdown from '../Dropdown/dropdown.component';

const DropdownWrapper = (props) => {
  const handleChange = () => {
    console.log()
  }
  return (
    <div>
      <Dropdown items = { props.category } onChange ={handleChange}></Dropdown>
      <Dropdown items = { props.platform }></Dropdown>
    </div>
  )
}

export default DropdownWrapper;


