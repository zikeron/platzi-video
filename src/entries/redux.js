
import {createStore} from 'redux';

const _form = document.getElementById('form');
_form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const data = new FormData(_form);
    const title = data.get('title');
    console.dir(title);
    store.dispatch({
        type:'ADD_SONG',
        payload: {
            title,
        }
    })
}

const initialState = [
    { title: "Despacito"},
    { title: "One more time"},
    { title: "echame la culpa"}
]

const reducer = function(state,action){
    switch(action.type){
        case 'ADD_SONG':
            return [ ...state, action.payload]
        default:
            return state
    }
}

const store = createStore(
    reducer, //reducer
    initialState,// initialState
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//enhacer
)

function render(){
    const _container = document.getElementById('playlist');
    const playlist = store.getState();
    _container.innerHTML = '';
    playlist.forEach( element => {
        const template = document.createElement('p');
        template.textContent = element.title;
        _container.appendChild(template);
    });
}
render();

function handleChange(){
    render();
}

store.subscribe(handleChange);

console.dir(store.getState())

