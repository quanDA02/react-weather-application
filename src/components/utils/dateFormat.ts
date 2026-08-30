export function dateFormat(date : number){
    return new Date(date*1000).toLocaleDateString("EN-US",{weekday:"short",})
}