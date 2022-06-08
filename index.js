function receivesAFunction(callBackfn){
    callBackfn ();
}
let namedFunction = function(){
    return '';
}
function returnsANamedFunction(){
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    return()=>"anonymous function";
}