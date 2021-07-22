import Dropdown from '../Dropdown/Dropdown';

const categorySelection = ["Shooter", "MMO", "MMORPG", "Strategy"];
const platformSelection = ["PC", "Browser"];

const DropdownWrapper = (props) => {
  const { onChangeCategory, onChangePlatform } = props;
  
  return (
    <div>
      <Dropdown 
        handleChange={onChangeCategory} 
        items={categorySelection.map((category) => category)}>
      </Dropdown>
      <Dropdown 
        handleChange={onChangePlatform} 
        items={platformSelection.map((platform) => platform)}>
      </Dropdown>
    </div>
  )
}

export default DropdownWrapper;


