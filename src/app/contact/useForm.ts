import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface FormValues {
  email: string;
  name: string;
  address: string;
  content: string;
  phone: string;
  service: string; // Chỉ một dịch vụ
}

const defaultValues: FormValues = {
  email: '',
  name: '',
  address: '',
  content: '',
  phone: '',
  service: '', // Khởi tạo rỗng cho dịch vụ
};

export const useCreateContactForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email phải là email hợp lệ").required("Email là trường bắt buộc"),
    name: yup.string().required("Họ và tên là trường bắt buộc"),
    address: yup.string().required("Tiêu đề là trường bắt buộc"),
    content: yup.string().required("Nội dung là trường bắt buộc"),
    phone: yup
      .string()
      .required("Số điện thoại là trường bắt buộc")
      .matches(/^\d+$/, "Số điện thoại chỉ bao gồm các chữ số")
      .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
      .max(11, "Số điện thoại không được vượt quá 11 chữ số"),

    // Kiểm tra có một dịch vụ được chọn
    service: yup.string().required("Bạn phải chọn một dịch vụ."),
  });

  const form = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    shouldFocusError: true,
    mode: 'all',
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    form.reset();
  };

  return {
    form,
    onSubmit,
  };
};
