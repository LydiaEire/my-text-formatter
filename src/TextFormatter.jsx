import React, { useState } from 'react';

const TextFormatter = () => {
    const [inputText, setInputText] = useState('');
    const [formattedText, setFormattedText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleButtonClick = () => {
        setFormattedText(inputText.toUpperCase());
    };

    return (
        <div style={{ padding: '20px' }}>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                style={{ marginRight: '10px' }}
            />
            <button onClick={handleButtonClick}>Add Text</button>
            {formattedText && (
                <div style={{ marginTop: '20px', color: 'blue', fontWeight: 'bold' }}>
                    {formattedText}
                </div>
            )}
        </div>
    );
};

export default TextFormatter;
