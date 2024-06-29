import React from 'react';
import { Icon } from "@iconify-icon/react";
import { graphql } from 'gatsby';
import { IconContainer } from '../styles';
import LocalIcon from "../svg/assets/local.svg";
import DisasterResponseIcon from "../svg/assets/disaster_response_icon.svg";
import RebuildingCommunitiesIcon from "../svg/assets/rebuilding_communities_icon.svg";
import LocalLeadersIcon from "../svg/assets/local_leaders_icon.svg";


export const IconSelector = ({ content }) => {
  const Icons = content.codeId || null;
  const iconClass = content.externalName;

  switch(Icons){
    case 'local':
      return <IconContainer><LocalIcon className={iconClass}/></IconContainer>
    case 'national':
      return <IconContainer><Icon icon="arcticons:50-us-states-map" class={iconClass}/></IconContainer>
    case 'global':
      return <IconContainer><Icon icon="et:global" class={iconClass}/></IconContainer>
    case 'arrow_right':
      return <IconContainer><Icon icon="heroicons-solid:arrow-sm-right" class={iconClass}/></IconContainer>
    case 'disaster_response':
      return <IconContainer><DisasterResponseIcon className={iconClass}/></IconContainer>
    case 'rebuilding_communities':
      return <IconContainer><RebuildingCommunitiesIcon className={iconClass}/></IconContainer>
    case 'local_outreach':
      return <IconContainer><LocalLeadersIcon className={iconClass}/></IconContainer>
    case 'email_icon':
      return <IconContainer><Icon icon="ic:round-email" className={iconClass}/></IconContainer>
      case 'tel_icon':
      return <IconContainer><Icon icon="mdi:telephone" className={iconClass}/></IconContainer>
    case 'rebuild':
      return <IconContainer><Icon icon="ion:home-outline" className={iconClass}/></IconContainer>
    case 'restore':
      return <IconContainer><Icon icon="fa6-solid:heart-pulse" className={iconClass}/></IconContainer>
    case 'relate':
      return <IconContainer><Icon icon="fluent:people-team-20-filled" className={iconClass}/></IconContainer>
    case 'return':
      return <IconContainer><Icon icon="ic:baseline-restore" className={iconClass}/></IconContainer>
    default:
      return;
  } 
}

export const query = graphql`
fragment iconSelector on ContentfulMedia{
  codeId
  contentful_id
  externalName
}
`