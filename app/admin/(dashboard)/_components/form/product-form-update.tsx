/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

const UpdateProductForm = ({ productData }: any) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        quantity: '',
    });

    useEffect(() => {
        if (productData) {
            setFormData({
                name: productData.name || '',
                description: productData.description || '',
                price: productData.price || '',
                category: productData.category || '',
                image: productData.image || '',
                quantity: productData.quantity || '',
            });
        }
    }, [productData]);

    const formik = useFormik({
        initialValues: {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            category: formData.category,
            image: formData.image,
            quantity: formData.quantity,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập tên sản phẩm'),
            price: Yup.number().required('Vui lòng nhập giá sản phẩm').positive('Giá sản phẩm phải là số dương'),
            category: Yup.string().required('Vui lòng nhập danh mục sản phẩm'),
            image: Yup.string().required('Vui lòng nhập đường dẫn hình ảnh sản phẩm'),
            quantity: Yup.number().required('Vui lòng nhập số lượng sản phẩm').integer('Số lượng sản phẩm phải là số nguyên').positive('Số lượng sản phẩm phải là số dương'),
            description: Yup.string().test('is-blank', 'Vui lòng nhập mô tả sản phẩm', (value: any) => {
                return value && value.trim().length > 0;
            }),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    useEffect(() => {
        if (productData) {
            formik.setValues({
                name: productData.name || '',
                description: productData.description || '',
                price: productData.price || '',
                category: productData.category || '',
                image: productData.image || '',
                quantity: productData.quantity || '',
            });
        }
    }, [productData]);

    const handleEditorChange = ({ html, text }: any) => {
        formik.setFieldValue('description', text);
    };

    const handleReset = () => {
        formik.resetForm();
    };

    return (
        <Form onFinish={formik.handleSubmit}>
            <Form.Item
                label="Tên sản phẩm"
                help={formik.errors.name && formik.touched.name ? formik.errors.name : ''}
                validateStatus={formik.errors.name && formik.touched.name ? 'error' : ''}
            >
                <Input
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
            </Form.Item>
            <Form.Item
                label="Mô tả sản phẩm"
                help={formik.errors.description && formik.touched.description ? formik.errors.description : ''}
                validateStatus={formik.errors.description && formik.touched.description ? 'error' : ''}
            >
                <MdEditor
                    style={{ height: '500px' }}
                    renderHTML={text => mdParser.render(text)}
                    onChange={handleEditorChange}
                    value={formik.values.description}
                />
            </Form.Item>
            <Form.Item
                label="Giá sản phẩm"
                help={formik.errors.price && formik.touched.price ? formik.errors.price : ''}
                validateStatus={formik.errors.price && formik.touched.price ? 'error' : ''}
            >
                <Input
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
            </Form.Item>
            <Form.Item
                label="Danh mục sản phẩm"
                help={formik.errors.category && formik.touched.category ? formik.errors.category : ''}
                validateStatus={formik.errors.category && formik.touched.category ? 'error' : ''}
            >
                <Input
                    name="category"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                />
            </Form.Item>
            <Form.Item
                label="Đường dẫn hình ảnh sản phẩm"
                help={formik.errors.image && formik.touched.image ? formik.errors.image : ''}
                validateStatus={formik.errors.image && formik.touched.image ? 'error' : ''}
            >
                <Input
                    name="image"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.image}
                />
            </Form.Item>
            <Form.Item
                label="Số lượng sản phẩm"
                help={formik.errors.quantity && formik.touched.quantity ? formik.errors.quantity : ''}
                validateStatus={formik.errors.quantity && formik.touched.quantity ? 'error' : ''}
            >
                <Input
                    name="quantity"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.quantity}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className='bg-blue-500'>
                    Cập nhật sản phẩm
                </Button>
                <Button type="default" onClick={handleReset} style={{ marginLeft: 8 }}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UpdateProductForm;
