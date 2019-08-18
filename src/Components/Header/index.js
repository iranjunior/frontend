/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {
  MdViewHeadline,
  MdSettings,
  MdNotifications,
  MdLanguage,
  MdHome,
  MdPermIdentity,
  MdFirstPage,
  MdHelpOutline,
} from 'react-icons/md';
import { LOGGED_USER } from '../../Constants/actionsType';

import {
  Headers, List, Element, Field, View, IconSpace, Circle, useStyles,
} from './styles';

const handleLogoutUser = (setAvatarButton, dispatch) => {
  dispatch({
    type: LOGGED_USER,
    token: null,
  });
  setAvatarButton(null);
  localStorage.setItem('token', null);
  dispatch(push('/login'));
};
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    props={props}
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  />
));

const Header = ({ dispatch }) => {
  const classes = useStyles();
  const [avatarButton, setAvatarButton] = useState(null);
  return (
    <Headers>
      <List>
        <Element>
          <Circle>
            <IconContext.Provider value={{ color: '#fff', size: '1.5em' }}>
              <View>
                <MdViewHeadline />
              </View>
            </IconContext.Provider>
          </Circle>
        </Element>
        <Element>
          <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
            <IconButton>
              <MdHome />
            </IconButton>
          </IconContext.Provider>
        </Element>
        <Element>
          <Field />
        </Element>
        <Element>
          <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
            <IconButton>
              <MdLanguage />
            </IconButton>
          </IconContext.Provider>
        </Element>
        <Element>
          <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
            <IconButton>
              <MdNotifications />
            </IconButton>
          </IconContext.Provider>
        </Element>
        <Element>
          <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
            <IconButton
              aria-controls="dropdown-menu-avatar-header"
              aria-haspopup="true"
              onClick={(e) => setAvatarButton(e.currentTarget)}
            >
              <Avatar
                alt="default"
                src="https://picsum.photos/200/300"
                className={classes.avatar}
              />
            </IconButton>
            <StyledMenu
              id="dropdown-menu-avatar-header"
              anchorEl={avatarButton}
              keepMounted
              open={Boolean(avatarButton)}
              onClose={() => setAvatarButton(null)}
            >
              <MenuItem>
                <IconSpace>
                  <IconContext.Provider value={{ color: '#333', size: '1.3em' }}>
                    <MdPermIdentity />
                  </IconContext.Provider>
                </IconSpace>
                Perfil
              </MenuItem>
              <MenuItem>
                <IconSpace>
                  <IconContext.Provider value={{ color: '#333', size: '1.3em' }}>
                    <MdSettings />
                  </IconContext.Provider>
                </IconSpace>
                Ajustes
              </MenuItem>
              <MenuItem>
                <IconSpace>
                  <IconContext.Provider value={{ color: '#333', size: '1.3em' }}>
                    <MdHelpOutline />
                  </IconContext.Provider>
                </IconSpace>
                Ajuda
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLogoutUser(setAvatarButton, dispatch);
                }}
              >
                <IconSpace>
                  <IconContext.Provider value={{ color: '#333', size: '1.3em' }}>
                    <MdFirstPage />
                  </IconContext.Provider>
                </IconSpace>
                Sair
              </MenuItem>
            </StyledMenu>
          </IconContext.Provider>
        </Element>
      </List>
    </Headers>
  );
};

const mapStateToProps = (state) => ({
  ...state,
  user: state.user.user,
});
export default connect(mapStateToProps)(Header);
