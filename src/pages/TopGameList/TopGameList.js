import React, { useState } from 'react';
import DropdownWrapper from '../../components/DropdownWrapper/DropdownWrapper';

// import CardWrapper from '../../components/CardWrapper/CardWrapper'

const TopGameList = (props) => {
  const [category, setCategory] = useState("shooter");
  const [platform, setPlatform] = useState("PC");

  const changeCategory = (category) => {
    setCategory(category);
  }

  const changePlatform = (platform) => {
    setPlatform(platform);
  }
  
  return (
    <div>
     <h1>Top 10 {category} Games for {platform}</h1>
      <DropdownWrapper 
        onChangeCategory={changeCategory} 
        onChangePlatform={changePlatform}
      ></DropdownWrapper>
      {/*<CardWrapper gamesData={filterGames.slice(0, 10)}></CardWrapper>*/}
    </div>
   );
}
 
export default TopGameList;