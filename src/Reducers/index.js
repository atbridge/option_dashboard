import optionParameters from './optionParameters'
import {
    VaR, density, 
    fangoostcall, 
    fangoostput, 
    fstscall,
    fstsput,
    carrmadancall,
    carrmadanput
} from './data'

const customCombineReducers=obj=>(state={}, action)=>Object.keys(obj).reduce((aggr, curr)=>({...aggr, [curr]:obj[curr](state[curr], action, state)}), {})

export default customCombineReducers({
    optionParameters,
    VaR, density, 
    fangoostcall, 
    fangoostput, 
    fstscall,
    fstsput,
    carrmadancall,
    carrmadanput
})