import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import api, { config } from '../../Services/api';
import {
  LOADED_VACANCIES,
  SET_SPECIALITIES,
  LOADED_SPECIALITIES,
  UIDESIGN_CLICKED_SELECT_ORDER_VACANCIES,
  ORDER_VACANCIES,
  SETTING_HOSPITALS_NAME,
} from '../../Constants/actionsType';
import {
  Container,
  Hospital,
  Vacancies,
  Specialities,
  Icon,
  Name,
  Card,
  FilterField,
  FilterActives,
  FilterAdd,
  FilterOrder,
  PanelField,
  LabelSelect,
  Tittle,
  useStyles,
  getIcons,
} from './styles';

const loadVacancies = (vacancies, dispatch) => {
  if (vacancies === null || vacancies === undefined || Object.keys(vacancies).length === 0) {
    api
      .get('/hospitals', config)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: LOADED_VACANCIES,
            vacancies: response.data.hospitals,
          });
          dispatch({
            type: SETTING_HOSPITALS_NAME,
            hospitals: [...new Set(response.data.hospitals.map((el) => el.hospital).sort())],
          });
        }
      })
      .catch((erro) => {
        throw erro;
      });
  }
};
const loadSpecialities = (specialities, dispatch) => {
  if (
    specialities === null || specialities === undefined || Object.keys(specialities).length === 0
  ) {
    api
      .get('/speciality', config)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: LOADED_SPECIALITIES,
            specialities: [...new Set(response.data.specialties.map((el) => el.name).sort())],
          });
        }
      })
      .catch((erro) => {
        throw erro;
      });
  }
};

const handleChangeFilter = (e) => ({
  type: SET_SPECIALITIES,
  specialities: e.target.value,
});
const handleDeleteFilter = (value, setSpecialities) => ({
  type: SET_SPECIALITIES,
  specialities: setSpecialities.filter((el) => el !== value),
});
const handleChangeOrder = (e) => ({
  type: UIDESIGN_CLICKED_SELECT_ORDER_VACANCIES,
  value: e.target.value,
});
const reorderVacancies = (vacancies, selectedOrderVacancy, dispatch) => {
  dispatch({
    type: ORDER_VACANCIES,
    order: selectedOrderVacancy,
  });
  if (selectedOrderVacancy === 'DESC') {
    const reorderVacancy = vacancies.sort((a, b) => {
      if (a.vacancy < b.vacancy) return 1;
      if (a.vacancy > b.vacancy) return -1;
      return 0;
    });
    dispatch({
      type: LOADED_VACANCIES,
      vacancies: reorderVacancy,
    });
  } else if (selectedOrderVacancy === 'ASC') {
    const reorderVacancy = vacancies
      .sort((a, b) => {
        if (a.vacancy < b.vacancy) return 1;
        if (a.vacancy > b.vacancy) return -1;
        return 0;
      })
      .reverse();
    dispatch({
      type: LOADED_VACANCIES,
      vacancies: reorderVacancy,
    });
  } else {
    const reorderVacancy = vacancies.sort((a, b) => {
      if (a.hospital > b.hospital) return 1;
      if (a.hospital < b.hospital) return -1;
      return 0;
    });
    dispatch({
      type: LOADED_VACANCIES,
      vacancies: reorderVacancy,
    });
  }
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const Panel = ({
  vacancies,
  orderVacancies,
  uiDesign,
  specialities,
  setSpecialities,
  dispatch,
}) => {
  const classes = useStyles();
  useEffect(() => {
    loadVacancies(vacancies, dispatch);
    loadSpecialities(specialities, dispatch);
    if (orderVacancies !== uiDesign.selectedOrderVacancy) {
      reorderVacancies(vacancies, uiDesign.selectedOrderVacancy, dispatch);
    }
  });

  return (
    <Container>
      <FilterField>
        <FilterActives>
          <LabelSelect>
            <Tittle>Filtros Usados</Tittle>
          </LabelSelect>
          {setSpecialities.map((value) => (
            <Chip
              key={value}
              className={classes.chips}
              label={value}
              onDelete={() => {
                dispatch(handleDeleteFilter(value, setSpecialities));
              }}
            />
          ))}
        </FilterActives>
        <FilterAdd>
          <LabelSelect>
            <Tittle className={classes.noMargin}>Filtros</Tittle>
          </LabelSelect>
          <FormControl className={classes.formcontrol}>
            <InputLabel htmlFor="select-multiple-checkbox">Especialidades</InputLabel>
            <Select
              multiple
              value={setSpecialities}
              onChange={(e) => {
                dispatch(handleChangeFilter(e));
              }}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {specialities.map((el) => (
                <MenuItem key={el} value={el}>
                  <Checkbox checked={setSpecialities.indexOf(el) > -1} />
                  <ListItemText primary={el} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FilterAdd>
        <FilterOrder>
          <LabelSelect>
            <Tittle className={classes.noMargin}>Ordem</Tittle>
          </LabelSelect>
          <FormControl className={classes.formcontrol}>
            <InputLabel htmlFor="select-order">Ordernar por</InputLabel>
            <Select
              value={uiDesign.selectedOrderVacancy}
              onChange={(e) => {
                dispatch(handleChangeOrder(e));
              }}
              input={<Input id="select-order" />}
            >
              <MenuItem value="none">Hospitais</MenuItem>
              <MenuItem value="DESC">Decrescente</MenuItem>
              <MenuItem value="ASC">Crescente</MenuItem>
            </Select>
          </FormControl>
        </FilterOrder>
      </FilterField>
      <PanelField>
        {vacancies.map((el) => {
          if (setSpecialities.length === 0) {
            return (
              <Card vacancies={el.vacancy} key={el.key.toString()}>
                <Hospital>{el.hospital}</Hospital>
                <Specialities>
                  <Icon>
                    <IconContext.Provider
                      value={{
                        color: '#fff',
                        size: '2em',
                        style: { margin: '10px' },
                      }}
                    >
                      {getIcons(el.speciality)}
                    </IconContext.Provider>
                    {el.speciality}
                  </Icon>
                </Specialities>
                <Vacancies>
                  {el.vacancy}
                  <Name>Leitos</Name>
                </Vacancies>
              </Card>
            );
          }
          if (setSpecialities.includes(el.speciality) === true) {
            return (
              <Card vacancies={el.vacancy} key={el.key.toString()}>
                <Hospital>{el.hospital}</Hospital>
                <Specialities>
                  <Icon>
                    <IconContext.Provider
                      value={{
                        color: '#fff',
                        size: '2em',
                        style: { margin: '10px' },
                      }}
                    >
                      {getIcons(el.speciality)}
                    </IconContext.Provider>
                    {el.speciality}
                  </Icon>
                </Specialities>
                <Vacancies>
                  {el.vacancy}
                  <Name>Leitos</Name>
                </Vacancies>
              </Card>
            );
          }
          return null;
        })}
      </PanelField>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ...state,
  uiDesign: state.uiDesign.panel,
  specialities: state.specialities.specialities,
  setSpecialities: state.specialities.setSpecialities,
  vacancies: state.vacancies.vacancies,
  orderVacancies: state.vacancies.order,
});

export default connect(mapStateToProps)(Panel);
