import Dropdown from '../Dropdown/Dropdown';

const categorySelection = ["Shooter", "MMO", "MMORPG", "Strategy"];
const platformSelection = ["PC", "Browser"];

const DropdownWrapper = (props) => {
  return (
    <div>
      <Dropdown handleChange={props.handleChange} items={categorySelection} type="category"></Dropdown>
      <Dropdown handleChange={props.handleChange} items={platformSelection} type="platform"></Dropdown>
    </div>
  )
}

export default DropdownWrapper;


