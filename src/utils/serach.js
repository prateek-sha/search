//util function for search
export const find = (previous, current) => {
    let currsize = current.length;
    let prevsize = previous.length;

    let finalarry = [];

    if (current.trim().length  === 0 )
     return finalarry;

    for(let i=0; i<prevsize; i++){
        let temp = previous[i];
        let count = 0;
        let check = 0 ;
        for(let j=0; j<temp.length; j++){
            let str1 = temp[j].toLowerCase();
            let str2 = current[count].toLowerCase();
            if(str1 === str2){
                while( count < currsize){
                    let str1 = temp[j].toLowerCase();
                    let str2 = current[count].toLowerCase();
                    if(str1 === str2){

                        j++;
                        count++;
                    }else break;
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