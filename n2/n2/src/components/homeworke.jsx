import { useState, useEffect } from 'react';


function Homeworken2() {
    const listObj = {
        'Akita': 'https://dog.ceo/api/breed/akita/images/random',
        'Beagle': 'https://dog.ceo/api/breed/beagle/images/random',
        'Dalmatian': 'https://dog.ceo/api/breed/dalmatian/images/random',
        'German Shepherd': 'https://dog.ceo/api/breed/germanshepherd/images/random',
        'Husky': 'https://dog.ceo/api/breed/husky/images/random',
        'Labrador': 'https://dog.ceo/api/breed/labrador/images/random',
        'Pug': 'https://dog.ceo/api/breed/pug/images/random',
        'Golden Retriever': 'https://dog.ceo/api/breed/retriever/golden/images/random',
        'Cocker Spaniel': 'https://dog.ceo/api/breed/spaniel/cocker/images/random',
    };

    const [img, setImg] = useState("");

    const listItems = Object.keys(listObj).map((option) =>
        <option key={option} value={option}>{option}</option>
    );

    const findItems = (selectedValue) => {
        const url = listObj[selectedValue];
        fetch(url).then(res => res.json())
            .then(res => setImg(res.message));
    }

    return (
        <div>
            <select defaultValue="" onChange={(e) => {
                const selectedValue = e.target.value;
                findItems(selectedValue);
            }}>
                <option disabled value="">Select a breed</option>
                {listItems}
            </select>
            <br/>
            {img ? <img src={img} width="250" /> : ""}
        </div>
    )
}

export default  Homeworken2;

