
let arr=[ 1,2,3,4,5,6,7,8,9,9,10];

let findDublicateElementOfArray =  (arr) => 
    {

        let  dublicateElement= [];
        for(let i=0;i<arr.length;i++)
        {
            for(let j=i+1;j<arr.length;j++)
            {
                if(arr[i]===arr[j])
                {
                    console.log("deleted successfully element  "+arr[i]);
                      arr.splice(j,1);
                   
                    break;
                }
          

        }

        }
        }
       
       
    
        let dublicateElement=findDublicateElementOfArray(arr);
        console.log(arr.join("  "));

 
