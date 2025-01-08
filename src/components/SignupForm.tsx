'use client'
import React from 'react';
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';

interface MyFormValues {
    name: string;
    email: string;
    password: string;
}

const SignupForm: React.FC<{}> = () => {
    const initialValues: MyFormValues = {
        name: '',
        email: '',
        password: '',
    };

    // Inline validation function
    const validate = (values: MyFormValues) => {
        const errors: { [key: string]: string } = {};

        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        return errors;
    };

    const handleSubmit = (values: MyFormValues, actions: FormikHelpers<MyFormValues>) => {
        console.log({ values });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Enter your name"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Enter your password"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Sign Up
                            </button>
                        </Form>
                    )}
                </Formik>
                <p className="text-sm text-gray-600 text-center mt-4">
                    Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
