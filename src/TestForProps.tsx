import React from 'react';
import { ITestForProps } from './interface/ITestForProps';


const TestForProps: React.FC<ITestForProps> = ({text, number, someArray, someArrayNumber, someArrayObject, someArrayObjectWithArray, someArrayObjectWithObject}) => {
    return (
    <>    
    <div>{text}</div>
    <div>{number}</div>
    <ul>
        {someArray.map((itemString, i) => <li key={i}>{itemString}</li>)}
    </ul>
    <ul>
        {someArrayNumber.map((itemNumber, i) => <li key={i+1}>{itemNumber}</li>)}
    </ul>
    <ul>
        {someArrayObject.map((itemObject, i) => {
            return(
                <li key={i+2}>nameIs:{itemObject.name} ageIs:{itemObject.age}</li>
            )
        })}
    </ul>
    <ul>
        {someArrayObjectWithArray.map((itemObject, i) => {
            return(
                <li key={i+3}>
                    {itemObject.friends.map((item) => item)}
                </li>
            )
        })}
    </ul>
    <ul>
        {someArrayObjectWithObject.map((itemObject, i) => {
            return(
                <li key={i+4}>
                    {itemObject.favoritePets.name}
                </li>
            )
        })}
    </ul>
    </>
    )
}

export default TestForProps