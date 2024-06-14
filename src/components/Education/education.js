import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { educations } from '../../data/constants';
import { EducationCard } from '../Cards/EducationCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 30px;
  padding: 50px 0px 50px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
  @media (max-width:450px){
    margin-right:20px;
}
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
  @media (max-width:450px){
    margin-left:20px;
}
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 16px; 
  }
  @media (max-width:450px){
    margin-left:20px;
}
`;

const TimeLineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Education = () => {
  return (
    <Container id='Education'>
      <Wrapper>
        <Title data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">Education</Title>
        <Desc data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">My education has been a journey of self-discovery and growth. My educational details are as follows.</Desc>
        <TimeLineSection>
          <Timeline>
            {educations.map((education, index) => (
              <TimelineItem key={index}> {/* Add key prop here */}
                <TimelineContent sx={{ py: '12px', px: '8px' }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator data-aos="slide-up" data-aos-duration="500" data-aos-delay="500" >
                  <TimelineDot variant='outlined' color='secondary'  data-aos="slide-up" data-aos-duration="500" data-aos-delay="500"/>
                  {index !== educations.length - 1 && <TimelineConnector color='primary'/>}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  );
};
