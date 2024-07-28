import { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const topics = ['Inflatable black-16_ft','Inflatable black-18_ft','Inflatable black-20_ft','Inflatable black-22_ft'];
const questions = ['Buble House-16_ft','Buble House-18_ft','Bubble House-20_ft','Buble House-22_ft'];
const Dome = () => {
  return (
    <>
    <div className='channel-bar shadow-lg top-0 left-0 fixed h-screen w-15 flex flex-col bg-gray-200'>
    <ChannelBlock />
        <header>Inflatable Dome</header>
        <Link to='/dome/black'><Dropdown  selections={topics} /></Link>
        <header>Bubble House</header>
        <Link to='/dome/House'><Dropdown  selections={questions} /></Link>
    </div>
    </>
  );
};

const Dropdown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5
          className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
        >
          {header}
        </h5>
        <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} />)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='15' className={chevClass} />
  );
};

const TopicSelection = ({ selection }) => (
  <div className='dropdown-selection '>
    <h5 className='dropdown-selection-text'>{selection}</h5>
  </div>
);

const ChannelBlock = () => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>Dome</h5>
  </div>
);

export default Dome;