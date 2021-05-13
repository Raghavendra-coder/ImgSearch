import React, { useState } from 'react';
import "./index.css"
import SearchImage from './SearchImg';

const SearchInput = () => {
  const [img,setImg] = useState("");

  const inputEvent = (event) => {
      const val = event.target.value;
      setImg(val);

  }


    return (<>
         
          <div className="Search_Input">
        <input placeholder="Search Image..." style={{margin : "auto" ,letterSpacing : "1.5px" , borderRadius : "10px"}}
            value={img} onChange={inputEvent}
        />
        {img!=="" ? <SearchImage search={img}/> : null}
        </div>
    </>)

}
export default SearchInput; 