import React from 'react';
import { Form, Button, Grid, Header } from 'semantic-ui-react';
import Container  from '../../components/common/Container';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup.string().required('Le prénom est requis'),
  lastName: yup.string().required('Le nom est requis'),
  email: yup.string().email('Email invalide').required('L\'email est requis'),
});

export default function candidates() {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2'>Ajouter un candidat</Header>
            <Formik
              initialValues={{ firstName: '', lastName: '', email: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <Field name='firstName'>
                    {({ field, form }: { field: any, form: any }) => (
                      <Form.Input
                        fluid
                        label='Prénom'
                        placeholder='Prénom'
                        error={
                          form.touched.firstName && form.errors.firstName
                        }
                        {...field}
                      />
                    )}
                  </Field>
                  <ErrorMessage name='firstName'>
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                  <Field name='lastName'>
                    {({ field, form }: { field: any, form: any }) => (
                      <Form.Input
                        fluid
                        label='Nom'
                        placeholder='Nom'
                        error={form.touched.lastName && form.errors.lastName}
                        {...field}
                      />
                    )}
                  </Field>
                  <ErrorMessage name='lastName'>
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                  <Field name='email'>
                    {({ field, form }: { field: any, form: any }) => (
                      <Form.Input
                        fluid
                        label='Email'
                        placeholder='Email'
                        error={form.touched.email && form.errors.email}
                        {...field}
                      />
                    )}
                  </Field>
                  <ErrorMessage name='email'>
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                <Button type='submit' disabled={isSubmitting}>
                 Soumettre
                </Button>
              </Form>
            )}
          </Formik>
        </Grid.Column>
      </Grid.Row>
    </Grid>
   </Container>
  );
 }

;
