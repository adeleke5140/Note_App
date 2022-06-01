import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  border: 1px solid #f4f5f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
    border: none;
    background: none;
    border-bottom: 1px solid var(--primary-color);
  }

  input:focus-visible {
    outline: none;
  }

  input:focus:not(:focus-visible) {
    outline: none;
  }
`;

const UserForm = props => {
  const [values, setValues] = useState();

  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Wrapper>
      {props.formType === 'signup' ? (
        <h2 className="form-title">Sign Up</h2>
      ) : (
        <h2 className="form-title">Sign In</h2>
      )}

      <Form
        onSubmit={e => {
          e.preventDefault();
          props.action({
            variables: {
              ...values
            }
          });
        }}
      >
        {props.formType === 'signup' && (
          <React.Fragment>
            <label htmlFor="username">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                required
                onChange={onChange}
              />
            </label>
          </React.Fragment>
        )}
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
            required
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            required
          />
        </label>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default UserForm;
