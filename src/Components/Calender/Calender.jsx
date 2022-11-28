import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
// import Calendar from 'react-github-contribution-calendar';
export default function Calender (){
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  
return <>
<Wrapper >
<Heading>Github Calendar and Stats</Heading>
<GitHubCalendar 
  username="param1raj" 
  transformData={selectLastHalfYear} 
  blockSize={23}
  fontSize={14}
  color={'#2890aa'}
>
<ReactTooltip delayShow={20} html/>
</GitHubCalendar>

      <StatsWrapper>
      <Steaks >
        <a href="https://github.com/Param1raj">
          <img
            align="left" width={"100%"}
            src="https://streak-stats.demolab.com?user=Param1raj&theme=tokyonight&hide_border=true&border_radius=4.6"
          />
        </a>
      </Steaks>
  {/* [![GitHub Streak](https://streak-stats.demolab.com?user=Param1raj&theme=tokyonight&hide_border=true&border_radius=4.6)](https://git.io/streak-stats) */}
      <Top_lang style={{width:""}}>
        <a href="https://github.com/Param1raj">  
          <img
            align="center"
            width={"100%"}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Param1raj&theme=tokyonight&hide_border=true"  //launguages
          />
        </a>
      </Top_lang>
      <Stats> <a href="https://github.com/Param1raj">
          <img
            // align="left"
            width={"100%"}
            src="https://github-readme-stats.vercel.app/api?username=Param1raj&show_icons=true&theme=tokyonight&hide_border=true" //stats
          />
        </a></Stats>
      </StatsWrapper>

</Wrapper>
</>
}

export const Wrapper = styled.div`
background-color:black;
font-weight:bold;
margin:auto;
color:#2890aa;
border-top:1px solid white;
border-left:1px solid white;
border-right:1px solid white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding-block:20px;
gap:20px;


@media all and (max-width:992px){
  gap:10px;
}
`

export const Heading = styled.div`
color:white;
font-size:35px;
@media all and (max-width:992px){
  font-size:30px;
}
`


const StatsWrapper = styled.div`
display:flex;
justify-content:left;
// align-items:center;
flex-wrap:wrap;
gap:20px;
// border:1px solid white;
width:61%;
@media all and (max-width:992px){
  width:90%;
}


@media all and (max-width:720px){
  width:100%;
}
`


const Steaks = styled.div`
@media all and (max-width:992px){
  width:450px;
}
@media all and (max-width:792px){
  width:391px;
}
`

const Top_lang = styled.div`
@media all and (max-width:992px){
  width:200px;
}

`

const Stats = styled.div`
@media all and (max-width:992px){
  width:369px;
}
@media all and (max-width:722px){
  width:382px;
}
`