import React from 'react'
import IconHome1 from '../icons/ic_home.svg';
import IconHomeInActive from '../icons/ic_home_inactive.svg';
import * as colors from '../../shared/theme/colors'

type IconHomeProps={
    isActive: boolean
}

const IconHome = (props: IconHomeProps) => {
    return props.isActive ? (
        <IconHomeInActive width='20' height='20'fill={colors.primaryOrange} />
    ) : (
        <IconHome1 width='20' height='20' />
    )
}

export default IconHome