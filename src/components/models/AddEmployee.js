import {message, Modal, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Formik, Form, Field, ErrorMessage,  } from "formik";
import { icons } from "../../utils/icons";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import "./index.scss";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postEmployeeRequest } from "../../redux/actions/staffs";

const AddEmployeeModel = ({visible, showModel, hideModal}) => {

  const [image_url, setImageUrl] = useState(null);
 const [isUploading, setIsUploading] = useState(false);
   const antIcon = <LoadingOutlined style={{ fontSize: 22 }} spin />;
  const dispatch = useDispatch();
  function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  }
    const beforeUpload = async (file) => {

      setIsUploading(true);
let image = await getBase64(file);

const formData = new FormData();
formData.append("file", image);
formData.append("upload_preset", "rhj0qawb");

const options = {
  method: "POST",
  body: formData,
};



return fetch("https://api.Cloudinary.com/v1_1/amanis/image/upload", options)
  .then(res => res.json())
  .then(res =>  { setImageUrl(res.secure_url);  message.success("file uploaded successfully");
    setIsUploading(false);
})
  .catch(err => {
    console.log(err);
      message.error("file upload failed.");
        setIsUploading(false);
  });


  };

  const isLoading = useSelector(state => state.StaffsReducer.employeesLoading);


    return (
      <>
        <Modal
        centered={true}
        closable={false}
        maskClosable
        footer={null}
        title={<h2 className="modal-title txt_dark_blue txt_font_weight_700 txt_center">Add Employee</h2>}
        visible={visible}
        width={450}
        mask={true}
        onOk={showModel}
        onCancel={hideModal}
        
        >
          
<Content>

  <Row>
    <div className="model-add-image">
    <img className="user-icon" src={image_url ? image_url : icons.user}/>
  
    </div>
    <div className="camera-icon-wrapper">
        <ImgCrop>
   <Upload  beforeUpload={beforeUpload}> <svg xmlns="http://www.w3.org/2000/svg" fill="#1B27AF" className="camera-icon" ><path d="M16.983 2l1.406 2.109c.371.557.995.891 1.664.891h3.93v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8zm3.07 4c-1.006 0-1.938-.5-2.496-1.337l-1.109-1.663h-6.93l-1.109 1.664c-.557.836-1.49 1.336-2.496 1.336h-4.93v15h22v-15h-2.93zm-7.053 1c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm0 1c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-8-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm-3-6h3.001v1h-3.001v-1z"/></svg>
   </Upload></ImgCrop>
    </div>
  </Row>
  <Row   className="add-employer-form-row">
      <Formik
       className="add-employer-form"
       initialValues={{ first_name: "",last_name: "", email: "" }}
       validate={values => {
         const errors = {};
         if (!values.first_name) {
           errors.first_name = "First name is required";
         }else if(!values.last_name) {
           errors.last_name = "Last name is required";
         }
         else if(!values.email) {
           errors.email = "Email is required";
         }
         return errors;
       }}
       onSubmit={(values) => {
     dispatch(postEmployeeRequest(values,image_url));
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Row>
           <Field className="form-input"  disabled={isSubmitting || isUploading} type="text" name="first_name" placeholder="JOHN Doe" />
           <ErrorMessage className="form-error-message"  name="first_name" component="div" />
           </Row>
             <Row>
           <Field className="form-input"  disabled={isSubmitting || isUploading} type="text" name="last_name" placeholder="JOHN Doe" />
           <ErrorMessage className="form-error-message"  name="last_name" component="div" />
           </Row>
               <Row>
           <Field className="form-input"  disabled={isSubmitting || isUploading} type="email" name="email" placeholder="email@example.com" />
           <ErrorMessage className="form-error-message"  name="email" component="div" />
           </Row>
            
           <Row>
            <button className="form-submit-btn image-add-btn bg_dark_blue" type="submit" disabled={isSubmitting}>
                {isUploading || isLoading ? <Spin indicator={antIcon} />: "ADD"}
            </button>
            </Row>
         </Form>
       )}
     </Formik>
  </Row>
</Content>
        </Modal>
      </>
    );
};

export default AddEmployeeModel;
