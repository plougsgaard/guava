import React, { NavigationExperimental } from 'react-native'

/**
 * Provide configuration constants for the app
 */

export const HEADER_HEIGHT = NavigationExperimental.Header.HEIGHT

export const NODE_ENV = process.env.NODE_ENV || 'development'

export const API = process.env.API || 'http://localhost:8200'
