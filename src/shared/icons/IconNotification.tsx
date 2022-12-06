import React from 'react'
import IconBell from '../icons/ic_bell.svg';
import IconBellInActive from '../icons/ic_bell_inactive.svg';
import * as colors from '../../shared/theme/colors'

type IconNotificationProps={
    isActive: boolean
}

const IconNotification = (props: IconNotificationProps) => {
    return props.isActive ? (
        <IconBellInActive width='20' height='20' fill={colors.primaryOrange} />
    ) : (
        <IconBell width='20' height='20' />
    )
}

export default IconNotification