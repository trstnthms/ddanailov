import Avatar from '@ddanailov/components/Testimonials/Avatar'

import {henry} from 'data/testimonials'

function HenryAvatar() {
  return (
    <Avatar
      href={henry.linkedin.profile}
      title={henry.title}
      src={henry.linkedin.image}
    />
  )
}

export default HenryAvatar