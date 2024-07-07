import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PuffLoader } from 'react-spinners';
import { FaVoteYea } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #1c1c1c;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;
`;

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  text-align: center;
  color: #ffffff;
`;

const HoverEffect = styled.div`
  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
  }
`;

const IconWrapper = styled.div`
  font-size: 3em;
  color: #4caf50;
  margin-bottom: 20px;
`;

const VotingIcon = styled(FaVoteYea)`
  font-size: 2em;
`;

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <IconWrapper>
        <VotingIcon />
      </IconWrapper>
      <HoverEffect>
        <PuffLoader color="#4caf50" size={150} />
      </HoverEffect>
      <LoadingText>Loading, please wait...</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingPage;
