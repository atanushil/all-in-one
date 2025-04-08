import { useState } from 'react';
import { FaTachometerAlt, FaClipboardList, FaBookOpen, FaStickyNote, FaQuestionCircle, FaVial } from 'react-icons/fa';

import { RiMenuUnfold2Fill, RiCharacterRecognitionFill, RiMenuFold2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar = (props) => {
  const [toggle, SetToggle] = useState(false);
  const size = 24;
  return (
    <Sidebar collapsed={toggle}>
      <Menu>
        <MenuItem icon={toggle ? <RiMenuFold2Fill size={size} /> : <RiMenuUnfold2Fill size={size} />} onClick={() => SetToggle(!toggle)}>Menu</MenuItem>
        <MenuItem component={<Link to={'/'} />} icon={<FaTachometerAlt size={size} />}>Dashboard</MenuItem>
        <MenuItem component={<Link to={'/assignments'} />} icon={<FaClipboardList size={size} />} >Assignments</MenuItem>
        <MenuItem component={<Link to={'/learn'} />} icon={<FaBookOpen size={size} />}> Learn</MenuItem>
        <MenuItem component={<Link to={'/notes'} />} icon={<FaStickyNote size={size} />}>Notes</MenuItem>
        <MenuItem component={<Link to={'/doubts'} />} icon={<FaQuestionCircle size={size} />}>Doubts</MenuItem>
        <MenuItem component={<Link to={'/tests'} />} icon={<FaVial size={size} />}>Test</MenuItem>
        <MenuItem
          component={<Link to={'/profile'} />}
          icon={
            <div style={{
              padding:'4px',
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#dddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              {props.username?.charAt(0).toUpperCase() || '?'}
            </div>
          }
          
        >
          {props.username}
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}
export default SideBar