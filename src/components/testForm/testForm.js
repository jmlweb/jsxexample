import React from 'react';

import Form from '../form/form';
import TextArea from '../textarea/textarea';
import Button from '../button/button';
import CheckBox from '../checkbox/checkbox';

const TestForm = ({ title = 'Sin título' }) => (
  <Form>
    <p>{title}</p>
    <div>
      <TextArea placeholder="Por favor, introduce tu mensaje" />
    </div>
    <div>
      <CheckBox text="Loreim" />
    </div>
    <div>
      <Button success lg>
        Enviar
      </Button>
    </div>
  </Form>
);

export default TestForm;
