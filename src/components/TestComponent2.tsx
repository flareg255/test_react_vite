import { useState } from "react";

type propType = {
    name:string,
    initNumber:number
}

// type stateType = {
//     value:number
// }

const TestComponent2: React.FC<propType> = ({name, initNumber}) => {
    const [state, setState] = useState<number>(initNumber);

    const clickHandler = ():void => {
        setState(prevState => prevState + 1)
        return ;
    }

    const clickHandler2 = ():void => {
        setState(prevState => prevState - 1)
        return ;
    }
    return(
        <>
            <div>こんにちは</div>
            <div>{name}</div>
            <div>{state}</div>
            <div onClick={clickHandler}>ぼたん</div>
            <div onClick={clickHandler2}>ぼたん2</div>
        </>
    );
};

export default TestComponent2;