import { useState } from "react";
import ShowCountry from "./ShowCountry";

const DisplayFilteredCountries = ({ country }) => {
    const [show, setShow] = useState(false)
  
    return(
      <div>
        <li>{country.name.common} <button onClick={() => setShow(!show)}>show</button></li>
        {show && <ShowCountry country={country}/ >}
      </div>
      
    )
}

export default DisplayFilteredCountries