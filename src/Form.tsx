import React, { FC, useState } from 'react';
import { createUseStyles } from 'react-jss';

import CardSelect from './CardSelect';
import { secondaryColor } from './constant';


const useStyles = createUseStyles({
    stretchColumn: {
        composes: 'flexColumn flex1 stretchSelf',
    },
    centerRow: {
        composes: 'flexRow justifyCenter alignCenter',
    },
    form: {
        composes: '$stretchColumn',
        // fontFamily: theme.font.montserrat,
        color: secondaryColor,
        fontSize: 14,
        fontWeight: 600,
        marginTop: 25,
    },

    // form
    field: {
        composes: '$stretchColumn',
        marginBottom: 24,
    },
    label: {
        opacity: 0.6,
        textTransform: 'uppercase',
        marginBottom: '0px !important',
    },
    card: {
        height: 57,
        width: '100%',
    },
    cardInput: {
        height: 54,
        marginTop: 9,
    },
    cardSelect: {
        flexDirection: 'row',
        marginTop: 9,
        paddingLeft: 17,
        paddingRight: 17,
    },
    dispositionIcon: {
        composes: '$centerRow',
        marginRight: 20,
    },
    valueSelect: {
        flex: 1,
        composes: 'flexRow alignCenter',
        fontSize: 16,
    },
    arrowIconSelect: {
        composes: '$centerRow',
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
    infoTitle: {
        marginBottom: '1px !important',
    },
    infoDescription: {
        opacity: 0.5,
        fontWeight: 500,
        fontSize: 12,
    },
    button: {

    },
    DispostionBtn: {
        display: 'none',
        cursor: 'pointer',
    },
    textDisposition: {
        width: 197,
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
        <div className={classes.form}>
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
    );
};

export default Form;
