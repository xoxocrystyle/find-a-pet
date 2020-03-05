import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom/cjs/react-dom.development';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placecholder={Location} onChange={e => setLocation(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;