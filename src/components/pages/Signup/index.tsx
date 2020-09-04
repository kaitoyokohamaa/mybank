import React from "react";
import { useHistory } from "react-router-dom";
import { Input, FormControl, FormLabel } from '@chakra-ui/core'
import firebase from '../../../firebase'
import { Button } from '@chakra-ui/core'
import styles from "./signup.module.css"
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const Index: React.FC = () => {
    const history = useHistory();
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Emailがおかしいです')
                    .required('Emailは必須になってます'),
                password: Yup.string()
                    .min(6, 'パスワードは6文字必要です')
                    .required('パスワードは必須になってます'),
            })}
            onSubmit={fields => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
        >
            {({ errors, status, touched }) => (
                <Form className={styles.formWrap}>
                    <FormControl className={styles.form}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className={styles.invalid} />
                    </FormControl>
                    <FormControl className={styles.form}>
                        <FormLabel htmlFor="fname">password</FormLabel>
                        <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className={styles.invalid} />
                    </FormControl>
                    <Button type="submit" variantColor='green' className={styles.register} >
                        登録
               　　 </Button>
                </Form>
            )}
        </Formik>
    )
}


export default Index;