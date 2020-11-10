//util function for search
export const find = (previous, current) => {
    let currsize = current.length;
    let prevsize = previous.length;

    let finalarry = [];

    for(let i=0; i<prevsize; i++){
        let temp = previous[i];
        let count = 0;
        let check = 0 ;
        for(let j=0; j<temp.length; j++){
            if(temp[j] === current[count]){
                while( count < currsize && temp[j] === current[count]){
                    j++;
                    count++;
                }
                if(count === currsize ){
                    check = 1;
                }
                if(count >= currsize) break;

                if(current[count] === " ") 
                {
                    check =1;
                }else{
                    count = 0;
                }
            }
        }
        check && finalarry.push(temp);
    }
    return finalarry;
}