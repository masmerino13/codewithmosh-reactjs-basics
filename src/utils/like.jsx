import React from 'react';
import styled from 'styled-components'

const LikeIcon = styled.i`
    color: #458ee1;
    cursor: pointer;
`;

const Like = ({ like, onLiked }) => (<LikeIcon onClick={onLiked} className={ `fa fa-heart${like ? '' : '-o'}`}></LikeIcon>)

export default Like
