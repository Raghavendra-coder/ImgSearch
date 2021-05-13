import React from  'react';
import './index.css'

const SearchImage = (props) => {
    
       

  const img = `https://source.unsplash.com/480x360/?${props.search}`;
  
return (<>
  <img src={img} alt="failed" />
</>)

}
export default SearchImage;