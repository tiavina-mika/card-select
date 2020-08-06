import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { activeColor } from './constant';

/* styles */
const useStyles = createUseStyles({
    centerRow: {
        composes: 'flexRow justifyCenter alignCenter',
    },
    valueSelect: {
        flex: 1,
        composes: 'flexRow alignCenter',
        fontSize: 16,
    },
    arrowIconSelect: {
        composes: '$centerRow',
    },
    rotateIcon180: {
        transform: 'rotate(180deg)',
    },
    rotateIcon90: {
        transform: 'rotate(90deg)',
    },
    valueLabel: {
        color: activeColor,
    },
});

type Props = {
    value: string;
    selectedValue?: string;
    index?: number;
    open?: boolean;
    label?: boolean;
};

const CardSelectOption: FC<Props> = ({ value, selectedValue, index, open, label }) => {
    const classes = useStyles();

    return (
        <>
            {/* the select input */}
            <div className={classes.valueSelect}>
                <span className={open && label ? classes.valueLabel : null}>
                    {/* if there is a display selected value other than the value, else just the value */}
                    {!index && selectedValue && label ? selectedValue : value}
                </span>
            </div>
            {/* it's a dropdown if it have an index (a list) */}
            {typeof index === 'undefined' && (
                <div className={classes.arrowIconSelect}>
                    <img
                        src={`../chevron-down.svg`}
                        alt=""
                        className={open ? classes.rotateIcon180 : null}
                    />
                </div>
            )}
        </>
    );
};

export default CardSelectOption;
