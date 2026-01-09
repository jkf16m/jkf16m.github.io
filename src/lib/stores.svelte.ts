export function w$<T>(initialValue: T){
    let _value = $state(initialValue);

    return {
        get v(){return _value;},
        set v(newValue: T){_value = newValue;},
    }
}

export function d$<T>(currentValue:T){
    return {
        get v(){return currentValue;}
    }
}