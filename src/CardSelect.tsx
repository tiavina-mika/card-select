import React, { FC, useState, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import Paper from './Paper';
import CardSelectOption from './CardSelectOption';
import FormLabel from './FormLabel';
import { activeColor } from './constant';

const useStyles = createUseStyles({
    stretchColumn: {
        composes: 'flexColumn flex1 stretchSelf',
    },
    centerRow: {
        composes: 'flexRow justifyCenter alignCenter',
    },
    paddingX: {
        paddingLeft: 17,
        paddingRight: 17,
    },
    // form
    field: {
        composes: '$stretchColumn',
        marginBottom: 24,
    },
    card: {
        height: 57,
        // width: '100%',
    },
    cardSelect: {
        flexDirection: 'row',
        composes: '$paddingX',
    },
    dispositionIcon: {
        composes: '$centerRow',
        marginRight: 20,
    },
    rotateIcon90: {
        transform: 'rotate(90deg)',
    },
    dropdown: {
        marginTop: 9,
        position: 'relative',
        flexDirection: 'column',
        width: '100%',
    },
    dropdownContent: {
        flexDirection: 'column',
        width: '100%',
        position: 'absolute',
        zIndex: 2000,

    },
    option: {
        composes: 'flexRow alignCenter $paddingX',
        height: 57,
        width: '100%',
        cursor: 'pointer',
        '&:hover': {
            color: activeColor,
        }
    },
});

type OptionProps = { id: boolean | string; value: string; selectedValue?: string };
type Props = {
    className?: string;
    label: string;
    icon?: string;
    selected?: OptionProps;
    options: OptionProps[];
    onSelect?: (value: OptionProps) => void;
};
const CardSelect: FC<Props> = ({ label, selected, className, options, onSelect, icon }) => {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);

    const handleSelect = (option: OptionProps): void => {
        onSelect(option);
        setOpen(false);
    };

    const getIcon = (id: string | boolean): ReactNode => (
        <div className={classes.dispositionIcon}>
            {/* <img src={`${publicIconPath}/${icon}.svg`} alt="" className={!id ? classes.rotateIcon90 : null} /> */}
        </div>
    );

    const dropdowOption = (index: number, option: OptionProps): ReactNode => (
        <div className={classes.option} key={index} onClick={() => handleSelect(option)}>
            {icon && getIcon(option.id)}
            <CardSelectOption index={index} open={open} {...option} />
        </div>
    );

    return (
        <div className={clsx(classes.field, className)}>
            <FormLabel text={label} />
            <div className={clsx(classes.dropdown)}>
                {/* the selected input */}
                <Paper
                  className={clsx(classes.card, classes.cardSelect)} 
                  onClick={() => setOpen(!open)}>
                    {icon && getIcon(selected.id)}
                    <CardSelectOption {...selected} open={open} label />
                </Paper>
                {/* the dropdown menu */}
                {open && (
                    <Paper className={clsx(classes.dropdownContent)}>
                        {options.map(
                            (option, index) =>
                                options.length <= 2 // only the inclinaison field
                                    ? option !== selected && dropdowOption(index, option) // not display the already selected
                                    : dropdowOption(index, option) // display all even the selected
                        )}
                    </Paper>
                )}
            </div>
        </div>
    );
};

export default CardSelect;
