import { Button, message, Space, Typography } from 'antd';
import Form, { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';
import { NextPage } from 'next';
import Navbar from '../components/navbar';
import asciiDecode from '../utils/ascii-decode.util';
import Copy from '../utils/copy.util';

const PageAsciiToText: NextPage = () => {
   const [form] = useForm();
   const [second] = useForm();
   const onDecode = (data) => {
      const newData = asciiDecode(data.text);
      second.setFieldsValue({
         text: newData,
      });
      Copy(newData);
      message.success('Copied !');
   };

   return (
      <>
         <Navbar />
         <div className="container-lg">
            <Typography.Title style={{ textAlign: 'center' }}>
               Ascii To Text
            </Typography.Title>
            <div className="content">
               <div>
                  <h2>Input</h2>
                  <Form layout="vertical" size="large" onFinish={onDecode}>
                     <FormItem
                        label="Enter your text"
                        name="text"
                        rules={[
                           { required: true, message: 'This is required !' },
                        ]}
                     >
                        <TextArea rows={5} />
                     </FormItem>

                     <FormItem>
                        <Space>
                           <Button
                              htmlType="submit"
                              type="primary"
                              size="large"
                              shape="round"
                           >
                              Generate
                           </Button>

                           <Button
                              type="ghost"
                              size="large"
                              shape="round"
                              onClick={async () => {
                                 const newData = await form.validateFields();
                                 const key = 'copyLoading';
                                 message.loading({
                                    content: 'Loading...',
                                    key,
                                 });
                                 setTimeout(() => {
                                    Copy(newData.text);
                                    message.success({
                                       content: 'Copied!',
                                       key,
                                       duration: 2,
                                    });
                                 }, 500);
                              }}
                           >
                              Copy
                           </Button>
                        </Space>
                     </FormItem>
                  </Form>
               </div>
               <div>
                  <h2>Output</h2>
                  <Form layout="vertical" form={second} size="large">
                     <FormItem label="Outpu text" name="text">
                        <TextArea rows={5} />
                     </FormItem>
                  </Form>
               </div>
            </div>
         </div>
         <style jsx>{`
            .container-lg {
               padding: 20px 15px;
               .content {
                  display: grid;
                  grid-template-columns: 60% 1fr;
                  grid-gap: 30px;
               }
            }
         `}</style>
      </>
   );
};

export default PageAsciiToText;
