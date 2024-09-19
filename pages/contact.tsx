import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 32px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  label {
    margin-bottom: 8px;
  }

  input,
  textarea {
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 4px;
  }

  button {
    padding: 12px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    border: none;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const ContactPage = () => (
  <Layout>
    <ContactContainer>
      <h1>Kontakt</h1>
      <ContactForm>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Nachricht</label>
        <textarea id="message" name="message" rows={6} required />

        <button type="submit">Absenden</button>
      </ContactForm>
    </ContactContainer>
  </Layout>
);

export default ContactPage;
