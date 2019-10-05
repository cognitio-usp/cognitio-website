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
    image,
    isFormerMember,
  } = toJSON(entry) || {};

  console.log(!!memberSince);


  return (
    <MemberPageTemplate
      name={memberName}
      role={memberRole}
      memberSince={(memberSince && moment(memberSince).format('MMM [de] YYYY')) || 'Invalid date'}
      memberUntil={(memberUntil && moment(memberUntil).format('MMM [de] YYYY')) || 'Invalid date'}
      memberUntilTimestamp={(memberUntil && moment(memberUntil).unix()) || null}
      email={memberEmail}
      lattes={memberLattes}
      linkedin={memberLinkedin}
      content={widgetFor('body')}
      otherInfos={memberOtherInfos}
      forceIsFormeMember={isFormerMember}
      thumb={getAsset(image) && getAsset(image).toString()}
    />
  );
};

export default MemberPagePreview;
