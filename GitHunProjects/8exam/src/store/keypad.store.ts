import { createReducer } from "@reduxjs/toolkit";
import { one, two, three, four, five, six, seven, eight, nine, zero, enter, remove } from "./actions";

type TState = {
    keypad: string,
    hiddenKeypad: string
}

const initialState: TState = {
    keypad: "",
    hiddenKeypad: ""
}

const password = "1337"
const maxNum = 4
const maxNumErrorMessage = "Maximum 4 numbers"
const granted = "Access Granted"
const denied = "Access Denied"

const keypadReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(one, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "1"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(two, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "2"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(three, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "3"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(four, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "4"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(five, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "5"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(six, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "6"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(seven, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "7"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(eight, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "8"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(nine, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "9"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(zero, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length >= maxNum) {
                alert(maxNumErrorMessage)
            } else {
                state.keypad += "0"
                state.hiddenKeypad += "*"
            }
        }
    })
    .addCase(enter, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad === password) {
                state.hiddenKeypad = granted
            } else {
                state.hiddenKeypad = denied
            }
        }
    })
    .addCase(remove, (state) => {
        if (state.hiddenKeypad !== granted && state.hiddenKeypad !== denied) {
            if (state.keypad.length > 0) {
                state.keypad = state.keypad.slice(0, -1);
                state.hiddenKeypad = state.hiddenKeypad.slice(0, -1);
            }
        }
    })
})

export default keypadReducer;
