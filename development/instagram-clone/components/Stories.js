import faker from "faker";
import { useEffect, useState } from 'react';

function Stories() {
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        console.log(suggestions);

        setSuggestions(suggestions);
    }, []);
    
    return (
        <div>
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
        </div>
    );
}

export default Stories;
