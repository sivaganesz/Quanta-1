import React from 'react'
import styled from 'styled-components';

// import bmi from '../Project/Image/bmi.png'
// import bugtrack from '../Project/Image/bugtrack.png'
// import chatapp from '../../src/components/Project/Image/chatapp.png'
// import hostelAM from '../components/Project/Image/hostelAM.jpg'
// import kidney from '../components/Project/Image/kidney.png'
// import hoster from '../components/Project/Image/hoster.png'
// import wallcrack from '../components/Project/Image/wallcrack.png'


const Card = styled.div`
width:330px;
height:490px;
background-color:${({ theme })=> theme.card};
cursor:pointer;
border-radius:10px;
box-shadow:0 0 12px 4px rgba(0,0,0,0.4);
overflow:hidden;
transition:all 0.5s ease-in-out;
padding:26px 20px;
display:flex;
flex-direction:column;
gap:14px;

&:hover{
    box-shadow:0 0 50px 4px rgba(0,0,0,0.6);
    filter:brightness(1.1);
    height:100%;
}
`;
const Image = styled.img`
width:100%;
height:180px;
background-color: ${({ theme })=> theme.white};
border-radius:10px;
object-fit:content;
box-shadow:0 0 16px 2px rgba(0,0,0,0.3);
`;
const Tags = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
gap:8px;
margin-top:4px;
align-items:center;
`;
const Tag = styled.div`
font-size:13px;
font-weight:400;
color :${({ theme })=> theme.primary};
background-color:${({ theme })=> theme.primary+30};
padding:3px 7px;
border-radius:8px;
`;
const Details = styled.div`
width:100%;
diaplay:flex;
flex-direction:column;
gap:0px;
padding:0px 2px;
`;
const Title = styled.div`
font-size:21px;
font-weight:600;
color:${({ theme })=> theme.text_secondary};
white-space:nowrap;
max-width:300px;
overflow:hidden;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
`;
const Date = styled.div`
font-size:13px;
font-weight:400;
margin-left:2px;
color:${({ theme })=> theme.text_secondary+90};
margin-top:2px;
@media (max-width:768px){
  font-size:10px;
}
`;

const Description = styled.div`
font-weight:400;
color:${({ theme })=> theme.primary+90};
overflow:hidden;
text-overflow:ellipsis;
margin-top:6px;
max-width:100%;
display:-webkit-box;
-webkit-line-clamp:4;
-webkit-box-orient:vertical;

&:hover{
  overflow:hidden;
  text-overflow:ellipsis;
  max-width:100%;
  display:-webkit-box;
  -webkit-line-clamp:15;
  -webkit-box-orient:vertical;
}
`;
const Members = styled.div`
display:flex;
align-items:center;
padding-left: 10px;
`;
const Avatar = styled.img`
height:40px;
width:40px;
border-radius:50%;
margin-left:-10px;
background-color:${({ theme })=> theme.white};
box-shadow: 0 0 10px rgba(0,0,0,0.2);
border:3px solid ${({ theme })=> theme.card};

`;
export const ProjectCard = ({project}) => {
  return (
    <Card data-aos="zoom-in" data-aos-duration="500" data-aos-delay="500">
    <Image src={project.image} data-aos="zoom-out" data-aos-duration="500" data-aos-delay="500"/>
    <Tags>
      {project.tags.map((tag, index) => ( // Adding key prop to each Tag component
        <Tag key={index}>{tag}</Tag>
      ))}
    </Tags>

    <Details>
      <Title>{project.title}</Title>
      <Date>{project.date}</Date>
      <Description>{project.description}</Description>
    </Details>

    <Members>
      {project.member?.map((member, index) => ( // Adding key prop to each Avatar component
        <Avatar key={index} src={member.img} />
      ))}
    </Members>
  </Card>
  )
}
