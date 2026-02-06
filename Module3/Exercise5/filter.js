export function filterWithSet(arr){
    let s=new Set();
    arr.forEach(element => {
        s.add(element);
    });

    return [...s];
}

export function filterWithoutSet(arr){
    return arr.filter((e,i,self)=> i===self.indexOf(e));
}

