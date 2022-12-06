import React from 'react'
import IconHeart from '../icons/ic_heart.svg';
import IconHeartInActive from '../icons/ic_heart_inactive.svg';
import * as colors from '../../shared/theme/colors'
type IconFavoriteProps={
    isActive: boolean
}

const IconFavorite = (props: IconFavoriteProps) => {
    return props.isActive ? (
        <IconHeartInActive width='20' height='20' fill={colors.primaryOrange}/>
    ) : (
        <IconHeart width='20' height='20' />
    )
}

export default IconFavorite