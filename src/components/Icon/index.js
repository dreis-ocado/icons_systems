import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';

import './style.scss'

import { 
  faUser, 
  faQuestion,
  faAngleLeft,
  faAngleRight,
  faExternalLinkAlt,
  faSearch,
  faTimes,
  faEllipsisH,
  faArrowRight, 
  faEdit,
  faTruck,
  faExclamationTriangle,
  faPlus,
  faPencilAlt,
  faGlobeAsia,
  faTrashAlt,
  faSyncAlt,
  faPlusCircle,
  faInfoCircle,
  faCheckCircle,
  faCheck,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';

import { faCalendarAlt, faEye, faFile } from '@fortawesome/free-regular-svg-icons';

library.add(
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  faUser,
  faQuestion,
  faAngleLeft,
  faAngleRight,
  faExternalLinkAlt,
  faSearch,
  faTimes,
  faCalendarAlt,
  faEllipsisH,
  faArrowRight,
  faEye,
  faEdit,
  faTruck,
  faExclamationTriangle,
  faPlus,
  faPencilAlt,
  faGlobeAsia,
  faTrashAlt,
  faSyncAlt,
  faPlusCircle,
  faInfoCircle,
  faCheckCircle,
  faCheck,
  faDatabase,
  faFile
)

const Icon = ({ name }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={['fab', name]} />
  </div>
)

export const Abundo = ({ name }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={ name } />
  </div>
)

export const AbundoRegular = ({ name }) => (
  <div className="icon" title={name}>
    <FontAwesomeIcon icon={['far', name]} />
  </div>
)

export default Icon