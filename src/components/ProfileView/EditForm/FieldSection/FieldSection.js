import React from 'react';

// formik
import {
    FieldArray,
    FastField,
    Field,
} from 'formik';

import classes from './FieldSection.module.scss'


const FieldSection = (props) => {
    const {
        type,
        placeholder,
        name,
        label
    } = getAttributes(props.name);

    let field = (
        <>
            <label>{label}</label>
            <Field
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
            />
        </>
    )

    if (props.isArray) {
        field = (
            <>
                <label>List of phone numbers</label>
                <FieldArray name='numbers'>
                    {(fieldHelpers) => createFieldForNumber(fieldHelpers, name)}
                </FieldArray>
            </>
        )
    }

    return <div className={classes.fieldContainer}> {field} </div>
}


const createFieldForNumber = (fieldHelpers, name) => {
    const {
        form: {values: {numbers}},
        push,
        remove,
    } = fieldHelpers;

    return numbers.map((phoneNumber, i) => {
        const plus = () => i < 4 ? push('') : null;
        const minus = () => remove(i);
        const minusBtn = i > 0 ? <button type='button' className={classes.minus} onClick={minus}> - </button> : null;
        const plusBtn = <button type='button' onClick={plus} className={classes.plus}> + </button>

        return (
            <div key={i}>
                <FastField
                    name={`${name}[${i}]`}
                    type='number'
                    placeholder={'Number'}
                />
                {plusBtn}
                {minusBtn}
            </div>
        )
    });
}

const getAttributes = (name) => {
    let type, placeholder, label;

    switch (name) {
        case 'address':
            type = 'text';
            placeholder = 'Address';
            label = 'Address'
            break
        case 'lastName':
            type = 'text';
            placeholder = 'LastName';
            label = 'LastName'
            break
        case 'firstName':
            type = 'text';
            placeholder = 'FirstName';
            label = 'FirstName';
            break
        case 'email':
            type = 'email';
            placeholder = 'Email';
            label = 'Email';
            break
    }

    return {
        name,
        type,
        placeholder,
        label
    }
}

export { FieldSection }