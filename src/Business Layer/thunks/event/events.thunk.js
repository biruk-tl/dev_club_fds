import EventDataService from '../../../Data Layer/services/event/event.service';
import eventActions from '../../actions/event/event.actions'


const getEvents = () => (dispatch) => {

    dispatch(eventActions.eventsLoading());

    EventDataService.getAllEvents()
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventsLoaded(response.data))
        })
        .catch((error) => dispatch(eventActions.eventsLoadingError(error.message)));
};

const getEvent = (id) => (dispatch) => {

    dispatch(eventActions.eventLoading());

    EventDataService.getEvent(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventLoaded(response.data))
        })
        .catch((error) => dispatch(eventActions.eventLoadingError(error.message)));    
};

const updateEvent = (id, data) => (dispatch) => {

    dispatch(eventActions.eventUpdating());

    EventDataService.updateEvent(id,data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventUpdated(response.data))
        })
        .catch((error) => dispatch(eventActions.eventUpdateError(error.message)));    
};

const createEvent = (data) => (dispatch) => {

    dispatch(eventActions.eventCreating());

    EventDataService.createEvent(data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventCreated(response.data))
        })
        .catch((error) => dispatch(eventActions.eventCreateError(error.message)));    
};

const deleteEvent = (data) => (dispatch) => {

    dispatch(eventActions.eventDeleting());

    EventDataService.deleteEvent(data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(eventActions.eventDeleted(response.data))
        })
        .catch((error) => dispatch(eventActions.eventDeleteError(error.message)));    
};


export {

    getEvents,
    getEvent,
    updateEvent,
    createEvent,
    deleteEvent,
    
}