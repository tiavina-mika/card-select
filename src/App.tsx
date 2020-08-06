import React, { FC, useState } from 'react';
import { createUseStyles } from 'react-jss';

import CardSelect from './CardSelect';
import { secondaryColor } from './constant';
import './styles.css'

const useStyles = createUseStyles({
    stretchColumn: {
        composes: 'flexColumn alignCenter flex1 stretchSelf',
    },
    root: {
        composes: '$stretchColumn',
        fontFamily: 'sans-serif',
        color: secondaryColor,
        fontSize: 14,
        fontWeight: 600,
        marginTop: 25,
    },
    content: {
        width: 500
    },
    input: {
        composes: '$stretchColumn',
        border: 'none',
        paddingLeft: 18,
        paddingRight: 18,
        '&:focus': {
            border: 'none',
        },
        '&::placeholder': {
            fontSize: 16,
            fontWeight: 500,
        },
    },
});

const angleOptions = [
    { id: '15', value: '15 - 24°', selectedValue: '15°' },
    { id: '25', value: '25 - 34°', selectedValue: '25°' },
    { id: '45', value: '35 - 45°', selectedValue: '45°' },
];
const orientationOptions = [
    { id: true, value: 'Portrait' },
    { id: false, value: 'Paysage' },
];

interface State {
    id: string | boolean;
    value: string;
    selectedValue?: string;
}


const Form: FC = () => {
    const classes = useStyles();

    const [angle, setAngle] = useState<State>(angleOptions.find((a) => a.id === '15'));
    const [inclinaison, setInclinaison] = useState<State>(orientationOptions.find((a) => a.id === true));

    const handleAngleSelect = (data: State): void => {
        setAngle(data);
    };
    const handleInclinaisonSelect = (data: State): void => {
        setInclinaison(data);
    };


    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <CardSelect
                    label="Inclinaison du toit"
                    selected={angle}
                    options={angleOptions}
                    onSelect={handleAngleSelect}
                />
                <CardSelect
                    label="Orientation des panneaux"
                    selected={inclinaison}
                    options={orientationOptions}
                    onSelect={handleInclinaisonSelect}
                    icon="solar-portrait"
                />

            </div>
        </div>
    );
};

export default Form;
