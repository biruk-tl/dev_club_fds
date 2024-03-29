import eventActionTypes from './event.action.types'

// GET ALL EVENTS (FOR LIST)
const eventsLoading = () => {
    return { type: eventActionTypes.EVENTS_LOADING }
}

const eventsLoaded = (events) => ({
    type: eventActionTypes.EVENTS_LOADED,
    payload: events,
})

const eventsLoadingError = (errorMessage) => ({
    type: eventActionTypes.EVENTS_LOADING_ERROR,
    payload: errorMessage,
})


// GET AN EVENT (FOR DETAILS)
const eventLoading = () => {
    return { type: eventActionTypes.EVENT_LOADING }
}

const eventLoaded = (event) => ({
    type: eventActionTypes.EVENT_LOADED,
    payload: event,
})

const eventLoadingError = (errorMessage) => ({
    type: eventActionTypes.EVENT_LOADING_ERROR,
    payload: errorMessage,
})


// CREATE AN EVENT 
const eventCreating = () => {
    return { type: eventActionTypes.EVENT_CREATING }
}

const eventCreated = (event) => ({
    type: eventActionTypes.EVENT_CREATED,
    payload: event,
})

const eventCreateError = (errorMessage) => ({
    type: eventActionTypes.EVENT_CREATE_ERROR,
    payload: errorMessage,
})

// UPDATE AN EVENT 
const eventUpdating = () => {
    return { type: eventActionTypes.EVENT_UPDATNG }
}

const eventUpdated = (event) => ({
    type: eventActionTypes.EVENT_UPDATED,
    payload: event,
})

const eventUpdateError = (errorMessage) => ({
    type: eventActionTypes.EVENT_UPDATE_ERROR,
    payload: errorMessage,
})


// DELETE AN EVENT 
const eventDeleting = () => {
    return { type: eventActionTypes.EVENT_DELETING }
}

const eventDeleted = (event) => ({
    type: eventActionTypes.EVENT_DELETED,
    payload: event,
})

const eventDeleteError = (errorMessage) => ({
    type: eventActionTypes.EVENT_DELETE_ERROR,
    payload: errorMessage,
})

//CLOSE EVENT

const eventClosing = () => {
    return { type: eventActionTypes.CLOSING_EVENT }
}

const eventClosed = (event) => ({
    type: eventActionTypes.EVENT_CLOSED,
    payload: event,
})

const eventCloseError = (errorMessage) => ({
    type: eventActionTypes.EVENT_CLOSE_ERROR,
    payload: errorMessage,
})

//CHECK TEAM
const checkingTeam = () => {
    return { type: eventActionTypes.CHECKING_TEAM }
}

const teamChecked = (team) => ({
    type: eventActionTypes.TEAM_CHECKED,
    payload: team,
})

const teamCheckError = (errorMessage) => ({
    type: eventActionTypes.TEAM_CHECK_ERROR,
    payload: errorMessage,
})

//ASSIGN SCOUT

const assigningScout = () => {
    return { type: eventActionTypes.ASSIGNING_SCOUT }
}

const scoutAssigned = (scout) => ({
    type: eventActionTypes.SCOUT_ASSIGNED,
    payload: scout,
})

const scoutAssignError = (errorMessage) => ({
    type: eventActionTypes.SCOUT_ASSIGN_ERROR,
    payload: errorMessage,
})

// BUILD TEAM
const teamBuilding = () => {
    return { type: eventActionTypes.TEAM_BUILDING }
}

const teamBuilt = (team) => ({
    type: eventActionTypes.TEAM_BUILT,
})

const teamBuildErrror = (errorMessage) => ({
    type: eventActionTypes.TEAM_BUILD_ERROR,
    payload: errorMessage,
})

// DELETE ALL EVENTS 
// const eventsSearching = () => {
//     return { type: eventActionTypes.EVENTS_DELETING }
// }

// const eventsSearchFound = (event) => ({
//     type: eventActionTypes.EVENTS_DELETED,
//     payload: event,
// })

// const eventsSearchNotFound = (errorMessage) => ({
//     type: eventActionTypes.EVENTS_DELETE_ERROR,
//     payload: errorMessage,
// })

// const eventsSearchError = (errorMessage) => ({
//     type: eventActionTypes.EVENTS_DELETE_ERROR,
//     payload: errorMessage,
// })


export default {
    eventsLoading,
    eventsLoaded,
    eventsLoadingError,

    eventLoading,
    eventLoaded,
    eventLoadingError,

    eventCreating,
    eventCreated,
    eventCreateError,

    eventUpdating,
    eventUpdated,
    eventUpdateError,

    eventDeleting,
    eventDeleted,
    eventDeleteError,

    eventClosing,
    eventClosed,
    eventCloseError,

    checkingTeam,
    teamChecked,
    teamCheckError,

    teamBuilding,
    teamBuilt,
    teamBuildErrror,

    assigningScout,
    scoutAssigned,
    scoutAssignError,

    // eventsSearching,
    // eventsSearchFound,
    // eventsSearchNotFound,
    // eventsSearchError,
}