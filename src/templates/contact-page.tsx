import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PlexusContainer from '../components/PlexusContainer';
import SectionHeader from '../components/SectionHeader';
import { letterSpacing } from '../style/helpers';
import { centerContentCollum } from '../style/modifiers';
import { colorPrimary, colorSecondary, colorTertiary, fontSecondary } from '../style/theme';
import { ContactPageTemplateQuery } from '../typings/graphql';
import Helmet from 'react-helmet';

type Contact = {
  name: string;
  email: string;
};

type Props = {
  contacts: Contact[];
  address1?: string | null;
  address2?: string | null;
};

const ContactTable = styled.table`
  margin-top: 32px;
  max-width: 800px;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  border-collapse: collapse;

  td,
  th {
    padding: 12px 24px;
  }

  td {
    border-top: 0;
    border-bottom: 1.5px solid #ffca83;
    background: #fff9f0;
    font-size: 18px;

    a {
      color: ${colorPrimary};
    }
  }

  th {
    background: #ffeacd;
    border-top: 0;
    border-bottom: 1.5px solid ${colorSecondary};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    letter-spacing: 0.14em;
  }
`;

const Address = styled.div`
  color: ${colorTertiary};
  font-size: 20px;
  white-space: pre-line;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const ContactPageTemplate = ({
  contacts,
  address1,
  address2,
}: Props) => (
  <>
    <PageTitle title="Contatos" />

    <ContactTable>
      <tbody>
        <tr>
          <th>Contato</th>
          <th>E-mail</th>
        </tr>
        {contacts.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </ContactTable>

    <SectionHeader label="Localização" />
    <Address>
      {address1}
      <br />
      {address2}
    </Address>
    <iframe
      title="mapa"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.31398764622!2d-46.730234!3d-23.557164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x27dcb36f1486d564!2sEscola+Polit%C3%A9cnica+da+Universidade+de+S%C3%A3o+Paulo!5e0!3m2!1spt-BR!2sbr!4v1565150785764!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
    />
  </>
);

const ContactPage = ({ data }: { data: ContactPageTemplateQuery }) => {
  const { frontmatter } = data.markdownRemark!;

  return (
    <Layout>
      <Helmet>
        <title>COGNITIO · Contato</title>
      </Helmet>
      <ContactPageTemplate
        contacts={frontmatter!.contacts}
        address1={frontmatter!.address1}
        address2={frontmatter!.address2}
      />
    </Layout>
  );
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        contacts {
          name
          email
        }
        address1
        address2
      }
    }
  }
`;
