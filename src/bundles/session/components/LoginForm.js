import React from "react";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;

const LoginForm = props => {
  const { handleSave, formData, setFormData } = props;
  return (
    <div className="login-form">
      <Form>
        <FormItem>
          <Input
            prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
            placeholder="Email"
            name="Email"
            id="email-field"
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </FormItem>
        <FormItem>
          <Input
            prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
            name="Password"
            type="password"
            placeholder="Password"
            id="password-field"
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </FormItem>
        <FormItem>
          <Button
            onClick={() => handleSave()}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <div className="form-footer">
            <Link to="/forget_password">Forgot password?</Link>
            <br />
            <Link to="/signup">Do not have account? Sign up here</Link>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};

LoginForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }).isRequired,
  handleSave: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired
};

export default LoginForm;
