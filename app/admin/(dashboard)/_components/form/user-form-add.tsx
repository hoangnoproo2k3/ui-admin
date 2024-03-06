import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button, Select, Checkbox } from 'antd';

const { Option } = Select;

const UserFormAdd = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Form onFinish={handleSubmit(onSubmit)} className="max-w-md mx-auto p-8">
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input {...register("username")} />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password {...register("password")} />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input {...register("email")} />
            </Form.Item>
            <Form.Item label="Full Name" name="full_name">
                <Input {...register("full_name")} />
            </Form.Item>
            <Form.Item label="Birthdate" name="birthdate">
                <Input type="date" {...register("birthdate")} />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
                <Select {...register("gender")}>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Avatar" name="avatar">
                <Input {...register("avatar")} />
            </Form.Item>
            <Form.Item label="Bio" name="bio">
                <Input.TextArea {...register("bio")} />
            </Form.Item>
            <Form.Item label="Location" name="location">
                <Input {...register("location")} />
            </Form.Item>
            {/* Social Links */}
            <Form.Item label="Social Links" name="social_links">
                <Input.Group>
                    <Form.Item name={["social_links", "facebook"]} noStyle>
                        <Input {...register("social_links[0].facebook")} />
                    </Form.Item>
                    <Form.Item name={["social_links", "twitter"]} noStyle>
                        <Input {...register("social_links[1].twitter")} />
                    </Form.Item>
                    {/* Add more social links if needed */}
                </Input.Group>
            </Form.Item>
            {/* Permissions */}
            <Form.Item name="permissions" valuePropName="checked">
                <Checkbox {...register("permissions[0]")}>Admin</Checkbox>
                {/* Add more permissions if needed */}
            </Form.Item>
            <Form.Item>
                <Button className='bg-blue-500' type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default UserFormAdd;
