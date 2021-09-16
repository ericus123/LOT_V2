import {  Modal, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Formik, Form, Field,  } from "formik";
import { icons } from "../../utils/icons";
import "./index.scss";

const AddEmployerModel = ({visible, showModel, hideModal}) => {


    return (
      <>
        <Modal
        centered={true}
        closable={false}
        maskClosable
        footer={null}
        title={<h2 className="modal-title txt_dark_blue txt_font_weight_700 txt_center">Add Company</h2>}
        visible={visible}
        width={450}
        mask={true}
        onOk={showModel}
        onCancel={hideModal}
        
        >
<Content>

  <Row>
    <div className="model-add-image">
    <img className="user-icon" src={icons.user}/>
  
    </div>
    <div className="camera-icon-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#1B27AF" className="camera-icon" ><path d="M16.983 2l1.406 2.109c.371.557.995.891 1.664.891h3.93v17h-24v-17h5.93c.669 0 1.293-.334 1.664-.891l1.406-2.109h8zm3.07 4c-1.006 0-1.938-.5-2.496-1.337l-1.109-1.663h-6.93l-1.109 1.664c-.557.836-1.49 1.336-2.496 1.336h-4.93v15h22v-15h-2.93zm-7.053 1c3.311 0 6 2.689 6 6s-2.689 6-6 6-6-2.689-6-6 2.689-6 6-6zm0 1c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-8-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm-3-6h3.001v1h-3.001v-1z"/></svg>
    </div>
  </Row>
  <Row   className="add-employer-form-row">
      <Formik
       className="add-employer-form"
       initialValues={{ email: "", password: "" }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = "Required";
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = "Invalid email address";
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Row>
           <Field className="form-input" disabled={isSubmitting} type="email" name="email" placeholder="Name of the company" />
           {/* <ErrorMessage  name="email" component="div" /> */}
           </Row>
           <Row>
          <Field  className="form-input" as="select" name="color">
            <option value={null}>Size of the company</option>
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
           {/* <ErrorMessage name="password" component="div" /> */}
           </Row>
           <Row>
            <button className="form-submit-btn image-add-btn bg_dark_blue" type="submit" disabled={isSubmitting}>
              ADD
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

export default AddEmployerModel;
