import { compose, pipe } from 'lodash/fp'
import { Map } from 'immutable';
import { reducer } from './reducer';
import store from './store';
import * as actions from './actionType';
import { bugAdded, bugResolved } from './actionCreator';



//one way of using immutability in JS
const person = { name: "John" };
const updated = Object.assign({}, person, { name: "Kiryu Zetsuna", style: "rakashka Palm"})
console.log(updated)

//Other way is the spread Operator 
//Important: it use a shallow copy, so the new opject share the same values as theoriginal object
//If it is not needed than use a deep copy by decomposing each object with a spread operatpor

// or we can use libraries such as immutable, immer, ...

const unsubscribe = store.subscribe(() =>{
    console.log("store changed", store.getState())
})
store.dispatch(bugAdded("bug 1"))

store.subscribe(() =>{
    console.log("store changed", store.getState())
})

store.dispatch(bugResolved(1))

store.subscribe(() =>{
    console.log("store changed", store.getState())
})


//Currying
const isAdmit = a => minAge => a > minAge? true: false

console.log(isAdmit(25,18))