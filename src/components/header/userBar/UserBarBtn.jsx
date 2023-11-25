import React from 'react';
import styled from 'styled-components';
import avatar from '../../../images/404-page.png';
import sprite from '../../../images/sprite.svg';

const UserBarBtn = ({ variant, toggleUserPanel }) => {
  return (
    <StyledUserBtn variant={variant} onClick={toggleUserPanel}>
      <img src={avatar} alt="User icon" />
      <p>Alex Rybachok</p>
      <svg width="20" height="20">
        <use href={`${sprite}#icon-arrow-down`} />
      </svg>
    </StyledUserBtn>
  );
};

const StyledUserBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: var(--border-radius-30);
  background: var(--gray-dark-color);
  border: none;
  cursor: pointer;
  color: rgba(250, 250, 250, 0.4);
  font-size: 16px;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    display: ${props => (props.variant === 'burger' ? 'flex' : 'none')};
  }
  img {
    width: 44px;
    height: 44px;
    border-radius: var(--border-radius-rounded);
  }
`;

export default UserBarBtn;
