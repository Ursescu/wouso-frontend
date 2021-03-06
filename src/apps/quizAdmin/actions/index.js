import { apiRequest } from 'core/app/actions/api'
import {
  SET_QUIZES,
  SET_QUIZ,
  SET_GRADE,
  SET_QUESTIONS,
  SET_QUESTION
} from './types'

const ROOT_URL = 'apps/wouso-quiz'

export const getQuizes = () => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'GET',
        path: `${ROOT_URL}/sessions`,
        success: payload => dispatch => {
          dispatch(setQuizes(payload))
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )

const setQuizes = quizes => {
  return {
    type: SET_QUIZES,
    payload: quizes
  }
}

export const getQuiz = secret => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'GET',
        path: `${ROOT_URL}/sessions/${secret}`,
        success: payload => dispatch => {
          dispatch(setQuiz(payload))
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )

const setQuiz = quiz => {
  return {
    type: SET_QUIZ,
    payload: quiz
  }
}

export const postQuiz = quiz => dispatch => {
  return new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'POST',
        path: `${ROOT_URL}/sessions`,
        data: quiz,
        success: payload => () => {
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )
}

export const setGrade = answer => dispatch => {
  dispatch({
    type: SET_GRADE,
    payload: answer
  })
}

export const postGrades = answers => dispatch => {
  return new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'PUT',
        path: `${ROOT_URL}/answers/grade`,
        data: answers,
        success: payload => () => {
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )
}

export const getQuestions = () => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'GET',
        path: `${ROOT_URL}/questions`,
        success: payload => dispatch => {
          dispatch(setQuestions(payload))
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )

const setQuestions = questions => {
  return {
    type: SET_QUESTIONS,
    payload: questions
  }
}

export const postQuestion = question => dispatch => {
  return new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'POST',
        path: `${ROOT_URL}/questions`,
        data: question,
        success: payload => () => {
          dispatch(setQuestion(payload))
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )
}

const setQuestion = question => {
  return {
    type: SET_QUESTION,
    payload: question
  }
}
