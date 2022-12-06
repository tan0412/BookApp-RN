import React from 'react'
import IconUser from '../icons/ic_profile.svg';
import IconUserInActive from '../icons/ic_profile_inactive.svg';
import * as colors from '../../shared/theme/colors'

type IconProfileProps={
    isActive: boolean
}

const IconProfile = (props: IconProfileProps) => {
    return props.isActive ? (
        <IconUserInActive width='20' height='20'fill={colors.primaryOrange} />
    ) : (
        <IconUser width='20' height='20' />
    )
}

export default IconProfile