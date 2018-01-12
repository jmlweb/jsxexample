import React from 'react';

import Form from '../form/form';
import TextArea from '../textarea/textarea';
import Button from '../button/button';
import CheckBox from '../checkbox/checkbox';
import Input from '../input/input';

const TestForm = ({ title = 'Sin título' }) => (
  <Form>

    <p>{title}</p>

    <Input lg placeholder="Email" />
    <Input sm placeholder="User Name" />
    <Input placeholder="Pass" />

    <div>
      <TextArea placeholder="Por favor, introduce tu mensaje" />
    </div>

    <div>
      <CheckBox>Sin negritas <b>Con negritas</b></CheckBox>
    </div>

    <div>
      <Button primary lg>
        Enviar
      </Button>
    </div>
  </Form>
);

export default TestForm;
