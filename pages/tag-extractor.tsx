import { Button, message, Space, Typography } from 'antd';
import Form, { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import Navbar from '../components/navbar';
import { tagExtractor } from '../lib/tag-extractor';
import Copy from '../utils/copy.util';

export default function () {
   const [second] = useForm();
   const [form] = useForm();
   const onExtractor = (data: More) => {
      const _data = tagExtractor(data.text, undefined, 4).join(',');
      second.setFieldsValue({
         text: _data,
      });
      Copy(_data);
      message.success('Copied !');
   };

   return (
      <>
         <Navbar />
         <div className="container-lg">
            <Typography.Title style={{ textAlign: 'center' }}>
               Tag Extractor
            </Typography.Title>

            <div className="content">
               <div>
                  <h2>Input</h2>
                  <Form
                     layout="vertical"
                     size="large"
                     onFinish={onExtractor}
                     form={form}
                  >
                     <FormItem
                        label="Enter your text"
                        name="text"
                        rules={[
                           { required: true, message: 'This is required!' },
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
                              Extract
                           </Button>
                        </Space>
                     </FormItem>
                  </Form>
               </div>

               <div>
                  <h2>Output</h2>
                  <Form layout="vertical" size="large" form={second}>
                     <FormItem label="Output text" name="text">
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
}
