// Create the store
let store = {};
try {
 store = JSON.parse(window.name);
} catch(e){};
store.save = function(){
 window.name = JSON.stringify(this);
};