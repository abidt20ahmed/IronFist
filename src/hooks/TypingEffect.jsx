import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words: text }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (isDeleting) {
                deleteLastCharacter();
            } else {
                typeNextCharacter();
            }
        }, 200);

        return () => {
            clearInterval(typingInterval);
        };
    }, [isDeleting]);

    useEffect(() => {
        if (!isDeleting && currentWord.length === text[currentWordIndex].length) {
            setIsDeleting(true);
        } else if (isDeleting && currentWord.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % text.length);
        }
    }, [currentWord, currentWordIndex, text, isDeleting]);

    const typeNextCharacter = () => {
        const currentText = text[currentWordIndex];
        setCurrentWord((prevWord) => prevWord + currentText[prevWord.length]);
    };

    const deleteLastCharacter = () => {
        // const currentText = text[currentWordIndex];
        setCurrentWord((prevWord) => prevWord.slice(0, -1));
    };

    return (
        <div className="flex">
            <h1>&#8203;</h1><h1>{currentWord}</h1>
        </div>
    );
};

export default TypingEffect;



// import React, { useState, useEffect } from 'react';

// const TypingEffect = ({ words: text }) => {
//     const [currentWordIndex, setCurrentWordIndex] = useState(0);
//     const [currentWord, setCurrentWord] = useState('');

//     useEffect(() => {
//         const typingInterval = setInterval(() => {
//             if (currentWord.length === text[currentWordIndex].length) {
//                 clearInterval(typingInterval);
//                 if (currentWordIndex === text.length - 1) {
//                     setTimeout(() => {
//                         setCurrentWordIndex(0);
//                         setCurrentWord('');
//                     }, 1000);
//                 } else {
//                     setTimeout(() => {
//                         setCurrentWordIndex((prevIndex) => prevIndex + 1);
//                         setCurrentWord('');
//                     }, 1000);
//                 }
//             } else {
//                 setCurrentWord((prevWord) => prevWord + text[currentWordIndex][prevWord.length]);
//             }
//         }, 150);

//         return () => {
//             clearInterval(typingInterval);
//         };
//     }, [currentWord, currentWordIndex, text]);

//     return (
//         <div className='flex'>
//             <h1>&#8203;</h1>  <h1>{currentWord}</h1>
//         </div>
//     );
// };

// export default TypingEffect;







// last latter blinks

// import React, { useState, useEffect } from 'react';

// const TypingEffect = ({ words: text }) => {
//     const [currentWordIndex, setCurrentWordIndex] = useState(0);
//     const [currentWord, setCurrentWord] = useState('');

//     useEffect(() => {
//         const typingInterval = setInterval(() => {
//             if (currentWord.length === text[currentWordIndex].length) {
//                 clearInterval(typingInterval);
//                 setTimeout(() => {
//                     deleteLastCharacter();
//                 }, 1000);
//             } else {
//                 setCurrentWord((prevWord) => prevWord + text[currentWordIndex][prevWord.length]);
//             }
//         }, 150);

//         return () => {
//             clearInterval(typingInterval);
//         };
//     }, [currentWord, currentWordIndex, text]);

//     const deleteLastCharacter = () => {
//         const currentText = text[currentWordIndex];
//         const newWord = currentText.slice(0, -1);

//         if (newWord.length === 0) {
//             setCurrentWord('');
//             setCurrentWordIndex((prevIndex) => (prevIndex + 1) % text.length);
//         } else {
//             setCurrentWord(newWord);
//             setTimeout(deleteLastCharacter, 100);
//         }
//     };

//     return (
//         <div className="flex">
//             <h1>{currentWord}</h1>
//         </div>
//     );
// };

// export default TypingEffect;
