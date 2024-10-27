import { useReducer } from "react";

type propType = {
    name:string,
    initNumber:number
}

type stateType = {
    value:number
}

const TestComponent: React.FC<propType> = ({name, initNumber}) => {
    const reducer = (state:stateType, action:string) => {
        switch(action){
            case '+':
                return {...state, value:state.value + 1};
            case '-':
                return {...state, value:state.value - 1};
            default:
                return {...state}
        }
    }
    const initData:stateType = {
        value:initNumber
    }

    const [state, dispatch] = useReducer(reducer, initData);
    return(
        <>
            <div>こんにちは</div>
            <div>{name}</div>
            <div>{state.value}</div>
            <div onClick={() => dispatch('+')}>ぼたん</div>
            <div onClick={() => dispatch('-')}>ぼたん2</div>
        </>
    );
};

export default TestComponent;