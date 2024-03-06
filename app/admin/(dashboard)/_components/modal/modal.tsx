import { Modal } from "antd";
import React from 'react';

const ModalChildren = ({ visible, onClose, userId, children }: any) => {
    return (
        <Modal
            className="my-8"
            title={userId ? "Cập nhật" : "Thêm mới"}
            centered
            visible={visible}
            onOk={onClose}
            onCancel={onClose}
            width={1000}
            footer={false}
        >
            {children}
        </Modal>
    );
};
export default ModalChildren;
