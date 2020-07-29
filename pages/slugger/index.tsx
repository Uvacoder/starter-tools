import { NextPage } from 'next';
import Navbar from '../../components/navbar';
import Form, { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { Button, message, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import slugify from 'slugify';
import Copy from '../../utils/copy.util';

const PageSlugger: NextPage = () => {
   const [form] = useForm();
   const [second] = useForm();

   const onSlugify = (data: More) => {
      const newData = slugify(data.text, {
         strict: true,
         lower: true,
      });

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
            <div className="content">
               <div>
                  <h2>Input</h2>
                  <Form
                     layout="vertical"
                     form={form}
                     size="large"
                     onFinish={onSlugify}
                  >
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
            }
            .content {
               display: grid;
               grid-template-columns: 60% 1fr;
               grid-gap: 30px;
            }
         `}</style>
      </>
   );
};

export default PageSlugger;
