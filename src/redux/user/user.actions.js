import UserActionTypes from './user.types';


// export const setCurrentUser = user => ({
// 	type: UserActionTypes.SET_CURRENT_USER,
// 	payload: user,

// });

export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCES,
	payload: user,
})


export const singInFailure = (error) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error,
})

export const emailSignInStart = (emailandPassword) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: emailandPassword
});

export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
})

export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCES
})

export const signOutFailure = (error) => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	payload: error,
})

export const signUpStart = (userCredentials) => ({
	type: UserActionTypes.SIGN_UP_START,
	payload: userCredentials
})

export const signUpSuccess = ({ user, additionalData }) => ({
	type: UserActionTypes.SIGN_UP_SUCCESS,
	payload: { user, additionalData }
})

export const signUpFailure = () => ({
	type: UserActionTypes.SIGN_UP_FAILURE
})


// export const emailSignInSuccess = (user) => ({
// 	type: UserActionTypes.EMAIL_SIGN_IN_SUCCES,
// 	payload: user,
// })

// export const emailSingInFailure = (error) => ({
// 	type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
// 	payload: error,
// })