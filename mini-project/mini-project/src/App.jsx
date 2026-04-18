import React from 'react'
import Card from './components/Card'
import './index.css'

const App = () => {

  const jobs = [
  {
    id: 1,
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    posted: "5 days ago",
    position: "Senior UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior",
    salary: "$2000 - $2500",
    location: "Seattle, USA"
  },
  {
    id: 2,
    logo: "https://logo.clearbit.com/google.com",
    company: "Google",
    posted: "1 week ago",
    position: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Mid-level",
    salary: "$3000 - $4000",
    location: "California, USA"
  },
  {
    id: 3,
    logo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    posted: "2 days ago",
    position: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    salary: "$3500 - $4500",
    location: "Redmond, USA"
  },
  {
    id: 4,
    logo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    posted: "3 days ago",
    position: "React Developer",
    tag1: "Part-time",
    tag2: "Mid-level",
    salary: "$2500 - $3200",
    location: "Los Angeles, USA"
  },
  {
    id: 5,
    logo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    posted: "1 day ago",
    position: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior",
    salary: "$4000 - $5000",
    location: "Menlo Park, USA"
  },
  {
    id: 6,
    logo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    posted: "4 days ago",
    position: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior",
    salary: "$1800 - $2500",
    location: "Austin, USA"
  },
  {
    id: 7,
    logo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    posted: "6 days ago",
    position: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior",
    salary: "$4500 - $6000",
    location: "Cupertino, USA"
  },
  {
    id: 8,
    logo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    posted: "2 weeks ago",
    position: "UI Designer",
    tag1: "Part-time",
    tag2: "Junior",
    salary: "$1500 - $2200",
    location: "Stockholm, Sweden"
  },
  {
    id: 9,
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    posted: "3 days ago",
    position: "Product Designer",
    tag1: "Full-time",
    tag2: "Mid-level",
    salary: "$2800 - $3500",
    location: "San Jose, USA"
  },
  {
    id: 10,
    logo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    posted: "5 days ago",
    position: "Frontend Engineer",
    tag1: "Contract",
    tag2: "Senior",
    salary: "$3000 - $4200",
    location: "New York, USA"
  }
];
  return (
    <div className='Parent'>
      {jobs.map(function(elem){
        return <Card logo={elem.logo} company={elem.company} position={elem.position} pay={elem.salary} time={elem.posted}location={elem.location} tag1={elem.tag1}tag2={elem.tag2}/>

      })}
      
      
    </div>
  )
}

export default App