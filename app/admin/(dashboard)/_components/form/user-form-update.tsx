import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button, Select, Checkbox } from 'antd';

const { Option } = Select;

const UserForm = ({ userId, initialValues }: any) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        // defaultValues: initialValues
    });
    // useEffect(() => {
    //     if (userId) {
    //         // Nếu userId không null, thực hiện các thao tác fill dữ liệu
    //         // Đây là nơi bạn có thể gọi API để lấy dữ liệu từ server dựa vào userId
    //         const fetchData = async () => {
    //             // Giả sử bạn có một hàm fetchDataFromServer(userId) để lấy dữ liệu từ server
    //             const userData = await fetchDataFromServer(userId);
    //             // Sau khi nhận được dữ liệu, đặt giá trị mặc định cho các trường form
    //             Object.keys(userData).forEach(key => {
    //                 setValue(key, userData[key]);
    //             });
    //         };
    //         fetchData();
    //     }
    // }, [userId, setValue]);

    const userData: any = initialValues
    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleReset = () => {
        reset();
    };

    return (
        <Form onFinish={handleSubmit(onSubmit)} className="max-w-md mx-auto p-8">
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input {...register("username")} defaultValue={userData.username} />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password {...register("password")} defaultValue={userData.password} />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input {...register("email")} defaultValue={userData.email} />
            </Form.Item>
            <Form.Item label="Full Name" name="full_name">
                <Input {...register("full_name")} defaultValue={userData.full_name} />
            </Form.Item>
            <Form.Item label="Birthdate" name="birthdate">
                <Input type="date" {...register("birthdate")} defaultValue={userData.birthdate} />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
                <Select {...register("gender")} defaultValue={userData.gender}>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Avatar" name="avatar">
                <Input {...register("avatar")} defaultValue={userData.avatar} />
            </Form.Item>
            <Form.Item label="Bio" name="bio">
                <Input.TextArea {...register("bio")} defaultValue={userData.bio} />
            </Form.Item>
            <Form.Item label="Location" name="location">
                <Input {...register("location")} defaultValue={userData.location} />
            </Form.Item>
            <Form.Item name="permissions" valuePropName="checked">
                <Checkbox {...register("permissions[0]")} value="write">Write</Checkbox>
                <Checkbox {...register("permissions[1]")} value="create">Create</Checkbox>
                <Checkbox {...register("permissions[2]")} value="read">Read</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button className='bg-blue-500 mr-3' type="primary" htmlType="submit">Update</Button>
                <Button className='bg-blue-500 text-white' type="default" onClick={handleReset}>Reset</Button>
            </Form.Item>
        </Form>
    );
};

export default UserForm;
