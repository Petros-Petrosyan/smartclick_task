import React from 'react';
import { useDispatch } from 'react-redux';

// formik
import {
    Formik,
    Form,
} from 'formik';

// action
import { editUser } from '../../../store/users/action'

// components
import { FieldSection } from '.';

// classes
import classes from './EditForm.module.scss';


const EditForm = (props) => {
    const dispatch = useDispatch();
    const {user: initialValues} = props;
    const submit = (values) => {
        dispatch(editUser(values));
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
            >
                {(formik) => {
                    const {values} = formik;
                    const Fields = createFields(values);

                    return (
                        <Form>
                            <div className={classes.fieldsConstructor}>{Fields}</div>
                            <div className={classes.btnContainer}>
                                <button type='submit' className={classes.btn}>Update Profile</button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}


const createFields = (values) => {
    const sections = {...values};
    delete sections.src;
    return Object.entries(sections)
        .map((section) => {
            const [sectionKey, sectionValues] = section;

            if (typeof sectionValues === 'object' && sectionValues !== null) {
                if (Array.isArray(sectionValues)) {
                    return (
                        <FieldSection
                            key={sectionKey}
                            isArray={true}
                            name={sectionKey}
                        />
                    )
                }
            } else {
                return <FieldSection key={sectionKey} name={sectionKey} />
            }
        });
}


export { EditForm }