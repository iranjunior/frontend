import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import  api, { config } from '../../Services/api';
import  { LOADED_VACANCIES, SET_SPECIALITIES, LOADED_SPECIALITIES } from '../../Constants/actionsType';
 //import { MdWhatshot } from 'react-icons/md'
import { IconContext } from 'react-icons';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { Container, Hospital, Vacancies, Specialities, Icon, Name, Card, FilterField, FilterActives, FilterAdd, FilterOrder, PanelField } from './styles';

const loadVacancies = (vacancies, dispatch) => {

if(vacancies === null || vacancies === undefined || Object.keys(vacancies).length === 0){
    api.get('/hospitals', config)
    .then(response =>{
        if(response.status === 200){
            dispatch({
                type: LOADED_VACANCIES,
                vacancies: response.data.hospitals
            })
        }
    })
    .catch(erro =>{
        
    })
}}
const loadSpecialities = (specialities, dispatch) => {

if(specialities === null || specialities === undefined || Object.keys(specialities).length === 0){
    api.get('/speciality', config)
    .then(response =>{
        if(response.status === 200){ 
            dispatch({
                type: LOADED_SPECIALITIES,
                specialities: response.data.specialties
            }) 
        }
    })
    .catch(erro =>{
        
    })
}}

const handleChangeFilter = (e) =>({

    type: SET_SPECIALITIES,
    specialities: e.target.value
 })



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
const Panel = ({ vacancies , specialities, setSpecialities, dispatch}) => {

    useEffect(() =>{
        console.log(setSpecialities);
        loadVacancies(vacancies , dispatch);
        loadSpecialities(specialities, dispatch);
    });

    return (
        <Container>
            <FilterField>
                <FilterActives>
                    <FormControl >
                     {setSpecialities.map(value => (
                            <Chip key={value.key} label={value.name}/>
                        ))}
                    </FormControl>
                </FilterActives>
                <FilterAdd>
                <FormControl>
                    <InputLabel htmlFor="select-multiple-checkbox">Especialidades</InputLabel>
                        <Select
                            multiple
                            value={setSpecialities}
                            onChange={e => {handleChangeFilter(e)}}
                            input={<Input id="select-multiple-checkbox" />}
                            renderValue={selected => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                        {specialities.map(el => (
                            <MenuItem key={el.key} value={el.name}>
                                <Checkbox checked={setSpecialities.indexOf(el.name) > -1} />
                                <ListItemText primary={el.name} />
                            </MenuItem>
                        ))}
                        </Select>
                 </FormControl>

                </FilterAdd>
                <FilterOrder>
                </FilterOrder>
            </FilterField>
            <PanelField>
            {
                vacancies.map(el => {
                    return(
                        
                        <Card vacancies={el.vacancy} key={el.key.toString()}>
                        <Hospital>{el.hospital}</Hospital>
                        <Specialities>
                            <Icon>
                                <IconContext.Provider value={{color: '#fff', size: '2em', style:{margin: '13px'}}}>
                                   
                                </IconContext.Provider>
                            </Icon>
                            {el.speciality}
                        </Specialities>
                        <Vacancies>
                            {el.vacancy}
                            <Name>
                                Leitos
                            </Name>
                        </Vacancies>
                    </Card>                    
                      )}  
                      )
            }
            </PanelField>
        </Container>
    )

};

export default connect(state =>({...state, specialities: state.specialities.specialities, setSpecialities: state.specialities.setSpecialities, vacancies: state.vacancies.vacancies}))(Panel);
