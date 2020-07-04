import {
    RECEIVE_QUESTION,
    ADD_QUESTION
} from '../actions/questions'

export default function questions (state= [],action){
    switch(action.type){
        case RECEIVE_QUESTION:
            return{
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [questions.id]: questions,
            }

        default: 
            return state
    }
}