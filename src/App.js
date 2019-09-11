import React, {useState} from 'react';

function App() {

    const nums = [2, 3, 4, 5];

    const [colorCode, setColorCode] = useState('r');
    const [night, setNight] = useState(false);

    const onColorClick = (e) => {
        const cc = e.target.name;
        console.log("cc: ", cc);
        setColorCode(cc);
    };

    const onNightChange = (e) => {
        const nn = e.target.checked;
        console.log("nn: ", nn);
        setNight(nn);
    };

    return <div>
        <div>Cisco</div>
        <div>
            <input type={'checkbox'} checked={night} onChange={onNightChange}/>
        </div>
        <div>
            <button name='r' onClick={onColorClick}>Red</button>
            <button name='b' onClick={onColorClick}>Blue</button>
            <button name='g' onClick={onColorClick}>Green</button>
            <button name='n' onClick={onColorClick}>Nums</button>
        </div>
        {colorCode === 'n' ? <Nums nums={nums}/> : <Color color={colorCode} night={night}/>}
    </div>;
}

const Color = ({color, night}) => {
    switch (color) {
        case 'r':
            return <Red prefix={' rr1 '} suffix={' rr2 '} night={night}/>;
        case 'b':
            return <Blue prefix={' bb1 '} suffix={' bb2 '} night={night}/>;
        case 'g':
            return <Green night={night}/>;
        default:
            throw Error(`Invalid color: ${color}`);
    }
};

const Red = (props) => {
    const {prefix, suffix, night} = props;
    const color = night ? 'darkred' : 'red';
    return <div style={{backgroundColor: color}}>
        <span>{prefix}</span>
        <span>Red</span>
        <span>{suffix}</span>
    </div>;
};

const Blue = ({prefix, suffix, night}) => {
    const color = night ? 'blue' : 'cyan';
    return <div style={{backgroundColor: color}}>
        <span>{prefix}</span>
        <span>Blue</span>
        <span>{suffix}</span>
    </div>;
};

const Green = ({night}) => {
    const color = night ? 'darkgreen' : 'green';
    return <div style={{backgroundColor: color}}>
        Green
    </div>;
};

const Nums = ({nums}) => {

    const mf = n => <li key={n.toString()}>{n}</li>;

    return <ul>
        {nums.map(mf)}
    </ul>;
};

export default App;
