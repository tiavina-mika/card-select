import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    label: {
        opacity: 0.6,
        textTransform: 'uppercase',
        fontSize: 14,
        marginBottom: '8px !important',
    },
});

type Props = {
    text: string;
};
const FormLabel: FC<Props> = ({ text }) => {
    const classes = useStyles();

    return <h6 className={classes.label}>{text}</h6>;
};

export default FormLabel;
