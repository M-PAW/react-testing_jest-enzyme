import React from 'react';
import PropTypes, { string } from 'prop-types';

import languageContext from './contexts/languageContext';
import stringsModule from './helpers/strings';

function Input ({ secretWord }) {
    const language = React.useContext(languageContext);
    const [ currentGuess, setCurrentGuess ] = React.useState("");
    return(
        <div data-test="component-input">
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
                    value={currentGuess}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    onClick={(evt) => {
                        evt.preventDefault();
                    
                        // TODO: update guessedWords
                        // TODO: check against secretWORD and update success if needed
                        setCurrentGuess("")}}
                    >
                    {stringsModule.getStringByLanguage(language, 'submit')}
                </button>
            </form>
        </div>
    );
};

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}

export default Input;