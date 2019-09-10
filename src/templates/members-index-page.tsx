import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import Layout from '../components/Layout';
import Members from '../components/Members';
import PageTitle from '../components/PageTitle';
import {
  MemberCardFragment,
  MembersIndexPageTemplateQuery,
} from '../typings/graphql';

type Props = {
  coordinators?: (MemberCardFragment | null)[] | null;
  members?: { node: MemberCardFragment }[] | null;
  formerMembers?: (MemberCardFragment | null)[] | null;
};

export const MembersIndexPageTemplate = ({
  members,
  coordinators,
  formerMembers,
}: Props) => {
  const formerMembersFromMembersQuery = members
    ? members
        .filter(item => {
          const memberUntilTimestamp = oc(
            item,
          ).node.frontmatter.memberUntilTimestamp();

          return (
            oc(item).node.frontmatter.isFormerMember()
            || (memberUntilTimestamp && +memberUntilTimestamp < Date.now())
          );
        })
        .map(item => item.node)
    : [];
  const formerMembersFromMembersQueryIds = formerMembersFromMembersQuery.map(
    item => item.id,
  );
  const filterMembersIds = [
    ...(coordinators ? coordinators.map(item => oc(item).id()) : []),
    ...(formerMembers ? formerMembers.map(item => oc(item).id()) : []),
    ...formerMembersFromMembersQueryIds,
  ];
  const filteredMembers =
    members && members.filter(item => !filterMembersIds.includes(item.node.id));
  const filteredFormerMembers = formerMembers
    ? formerMembers.filter(
        item => !formerMembersFromMembersQueryIds.includes(oc(item).id('')),
      )
    : [];

  return (
    <>
      <PageTitle title="Corpo científico" />

      <Members sectionLabel="Coordenadores" members={coordinators} />
      <Members
        members={filteredMembers && filteredMembers.map(item => item.node)}
      />
      <Members
        sort
        sectionLabel="Ex-Membros"
        members={[
          ...(filteredFormerMembers || []),
          ...formerMembersFromMembersQuery,
        ]}
      />
    </>
  );
};

const MembersIndexPage = ({
  data,
}: {
  data: MembersIndexPageTemplateQuery;
}) => (
  <Layout pageTitle="Membros">
    <Helmet>
      <title>COGNITIO · Corpo científico</title>
    </Helmet>
    <MembersIndexPageTemplate
      coordinators={oc(data).markdownRemark.frontmatter.coordinators()}
      members={oc(data).members.edges()}
      formerMembers={oc(data).markdownRemark.frontmatter.formerMembers()}
    />
  </Layout>
);

export default MembersIndexPage;

export const membersIndexPageQuery = graphql`
  query MembersIndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "members-index-page" } }) {
      frontmatter {
        coordinators {
          ...MemberCard
        }
        formerMembers {
          ...MemberCard
        }
      }
    }

    members: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "member-page" } } }
      sort: {
        fields: [frontmatter___memberType, frontmatter___memberName]
        order: ASC
      }
    ) {
      edges {
        node {
          ...MemberCard
        }
      }
    }
  }
`;
