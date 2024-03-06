/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MDEditor from '@uiw/react-md-editor'; // Thêm import cho MDEditor

const UpdatePostForm = ({ postData }: any) => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        markdown: '', // Thêm trường markdown vào formData
    });

    useEffect(() => {
        if (postData) {
            setFormData({
                title: postData.title || '',
                content: postData.content || '',
                markdown: postData.markdown || '', // Cập nhật giá trị cho trường markdown
            });
        }
    }, [postData]);

    const formik = useFormik({
        initialValues: {
            title: formData.title,
            content: formData.content,
            markdown: formData.markdown, // Thêm trường markdown vào initialValues
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Vui lòng nhập tiêu đề'),
            content: Yup.string().required('Vui lòng nhập nội dung'),
            markdown: Yup.string(), // Thêm validation cho trường markdown
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    useEffect(() => {
        formik.setValues({
            ...formik.values,
            title: formData.title,
            content: formData.content,
            markdown: formData.markdown, // Cập nhật giá trị cho trường markdown
        });
    }, [formData]);

    return (
        <Form onFinish={formik.handleSubmit}>
            <Form.Item
                label="Tiêu đề"
                help={formik.errors.title && formik.touched.title ? formik.errors.title : ''}
                validateStatus={formik.errors.title && formik.touched.title ? 'error' : ''}
            >
                <Input
                    name="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
            </Form.Item>
            <Form.Item
                label="Nội dung"
                help={formik.errors.content && formik.touched.content ? formik.errors.content : ''}
                validateStatus={formik.errors.content && formik.touched.content ? 'error' : ''}
            >
                <Input.TextArea
                    name="content"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.content}
                />
            </Form.Item>
            <Form.Item
                label="Markdown"
                help={formik.errors.markdown && formik.touched.markdown ? formik.errors.markdown : ''}
                validateStatus={formik.errors.markdown && formik.touched.markdown ? 'error' : ''}
            >
                <MDEditor
                    data-color-mode="light"
                    value={formik.values.markdown}
                    onChange={value => formik.setFieldValue('markdown', value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit"
                    //  disabled={formik.isSubmitting}
                    className='bg-blue-500'>
                    Cập nhật bài viết
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UpdatePostForm;
