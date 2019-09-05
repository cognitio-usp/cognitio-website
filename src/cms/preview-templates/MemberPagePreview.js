import moment from 'moment';
import React from 'react';
import { MemberPageTemplate } from '../../templates/member-page';
import { toJSON } from '../utils/toJSON';

const MemberPagePreview = ({ entry, widgetFor, widgetsFor, getAsset }) => {
  const {
    memberName,
    memberRole,
    memberSince,
    memberUntil,
    memberEmail,
    memberLattes,
    memberLinkedin,
    memberOtherInfos,
    memberThumb,
    isFormerMember,
  } = toJSON(entry) || {};

  return (
    <MemberPageTemplate
      name={memberName}
      role={memberRole}
      memberSince={memberSince && moment(memberSince).format('MMM [de] YYYY')}
      memberUntil={memberUntil && moment(memberUntil).format('MMM [de] YYYY')}
      memberUntilTimestamp={moment(memberUntil).unix()}
      email={memberEmail}
      lattes={memberLattes}
      linkedin={memberLinkedin}
      content={widgetFor('body')}
      otherInfos={memberOtherInfos}
      forceIsFormeMember={isFormerMember}
      thumb={getAsset(memberThumb) && getAsset(memberThumb).toString()}
    />
  );
};

export default MemberPagePreview;