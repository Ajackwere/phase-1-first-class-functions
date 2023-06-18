function receivesAFunction(callBack){
    callBack();
};
function returnsANamedFunction(){
    return function named(){
        console.log("This is a named function");
    }
};
function returnsAnAnonymousFunction(){
    return function(){

    }
}
