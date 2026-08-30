export function timeFormat(time : number){
    return new Date(time*1000).toLocaleTimeString("EN-US",{
                hour: "numeric",
                minute : "2-digit",
              }) 
}