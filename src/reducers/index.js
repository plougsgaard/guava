import { combineReducers } from 'redux'

import navigation from './navigation'
import { reducer as form } from 'redux-form'
import resetPassword from './resetPassword'
import userProfile from './userProfile'
import session from './session'
import hats from './hats'
import foods from './foods'
import brands from './brands'
import layout from './layout'

export const rootReducer = combineReducers({
  navigation,
  form,
  resetPassword,
  userProfile,
  session,
  hats,
  foods,
  brands,
  layout
})
