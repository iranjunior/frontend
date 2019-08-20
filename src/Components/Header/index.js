/* eslint-disable react/prop-types */
import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
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
import { UIDESIGN_CLICKED_AVATAR_BUTTON, LOGGED_USER } from '../../Constants/actionsType';

import {
  Headers, List, Element, Field, View, IconSpace, Circle, useStyles,
} from './styles';

const handleClickAvatar = (e) => ({
  type: UIDESIGN_CLICKED_AVATAR_BUTTON,
  uiDesign: e.currentTarget,
});

const handleClickAvatarClose = () => ({
  type: UIDESIGN_CLICKED_AVATAR_BUTTON,
  uiDesign: null,
});
const handleLogoutUser = (dispatch) => {
  dispatch({
    type: LOGGED_USER,
    token: null,
  });
  dispatch({
    type: UIDESIGN_CLICKED_AVATAR_BUTTON,
    uiDesign: null,
  });
  localStorage.setItem('token', null);
  dispatch(push('/login'));
};
/*
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
)); */
export const Header = ({ uiDesignHeader, dispatch }) => {
  const classes = useStyles();
  return (
    <Headers data-test="header">
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
              onClick={(e) => dispatch(handleClickAvatar(e))}
            >
              <Avatar
                alt="default"
                src="https://picsum.photos/200/300"
                className={classes.avatar}
              />
            </IconButton>
            <Menu
              id="dropdown-menu-avatar-header"
              anchorEl={uiDesignHeader.clickedAvatarButton}
              keepMounted
              open={Boolean(uiDesignHeader.clickedAvatarButton)}
              onClose={() => dispatch(handleClickAvatarClose())}
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
                  handleLogoutUser(dispatch);
                }}
              >
                <IconSpace>
                  <IconContext.Provider value={{ color: '#333', size: '1.3em' }}>
                    <MdFirstPage />
                  </IconContext.Provider>
                </IconSpace>
                Sair
              </MenuItem>
            </Menu>
          </IconContext.Provider>
        </Element>
      </List>
    </Headers>
  );
};
Header.propTypes = {
  uiDesignHeader: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  ...state,
  uiDesignHeader: state.uiDesign.header,
});
export default connect(mapStateToProps)(Header);
