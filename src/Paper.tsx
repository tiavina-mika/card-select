import React, { FC, ReactNode, MouseEvent } from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { activeColor } from './constant';

const useStyles = createUseStyles({
    card: {
        composes: 'flexColumn stretch',
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        // boxShadow: '0 6px 12px 0 rgba(0,0,0,0.1)',
        border: '1px solid #ECECEC',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.08)',
    },
    // checkable card styles
    checkableCard: {
        borderRadius: 2.17,
        backgroundColor: '#FFFFFF',
        border: '1px solid #ECECEC',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.08)',
        position: 'relative', // important for the pseudo-element
        //-------------- the hover border ----------------//
        // we have to use 2 divs because if we use one, the "selected" color shows up a bit during animation
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: `2px solid black`,
            borderRadius: 2.17,
            pointerEvents: 'none',
            opacity: 0,
            transition: 'opacity 300ms',
        },
        //-------------- the selection border ----------------//
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: `2px solid ${activeColor}`,
            borderRadius: 2.17,
            pointerEvents: 'none',
            opacity: 0,
            transition: 'opacity 300ms',
        },
        '&:hover::before': {
            opacity: 0.3,
        },
    },
    checkableCardActive: {
        '&::after': {
            opacity: 1,
        },
        '&:hover::before': {
            opacity: 0,
        },
    },
    checkable: {
        cursor: 'pointer',
    },
    disabled: {
        pointerEvents: 'none',
    },
});

type Props = {
    children?: ReactNode;
    className?: string;
    classcheckable?: string;
    selected?: boolean;
    disabled?: boolean;
    onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
};

const Paper: FC<Props> = ({
    children,
    className,
    classcheckable,
    onClick,
    selected,
    disabled,
}) => {
    const classes = useStyles();

    if (!!onClick) {
        return (
            <div
                className={clsx(
                    classes.card,
                    classes.checkableCard,
                    className,
                    selected && classcheckable ? classcheckable : '',
                    selected && classes.checkableCardActive,
                    disabled ? classes.disabled : classes.checkable
                )}
                onClick={!disabled ? onClick : undefined}
              >
                {children}
            </div>
        );
    }

    return (
        <div className={clsx(classes.card, className)}>
            {children}
        </div>
    );
};

export default Paper;
