

export const MakeSignUpApi=(phone,email,name,password_)=>{
    return `http://185.211.4.42:3000/api/signupApiAccess?name=${name}&email=${email}&phone=${phone}&password=${password_}`;
}
export const MakeshowProductsApi=()=>{
    return `http://185.211.4.42:3000/api/getproducts`;
}

export const MakeLoginApi=(email_,password_)=>{
    return `http://185.211.4.42:3000/api/loginApiAccess?email=${email_}&password=${password_}`;
}
export const MakeGetTypeApi=(id_)=>{
    return `http://185.211.4.42:3000/api/GetType?id=${id_}`;
}
export const MakeCheckExistanceApi=(id_)=>{
    return `http://185.211.4.42:3000/api/checkexisted?id=${id_}`;
}
export const MakeContineousCheckApi=(id_,password_)=>{
    return `http://185.211.4.42:3000/api/contenouscheck?id=${id_}&&password=${password_}`;
}
export const MakeAddRequestApi = (enddate, clientid_, requestservice_, cost_, profit_,code_)=>{
    return `http://185.211.4.42:3000/api/addrequest?enddate=${enddate}&clientid=${clientid_}&requestservice=${requestservice_}&cost=${cost_}&profit=${profit_}&code=${code_}`;
}
export const MakeGetRequestByidApi=(_id)=>{
    return `http://185.211.4.42:3000/api/getrequestsdata?id=${_id}`;
}

export const MakecheckactivateprogramApi = (servicename,email, password) => {
    return `http://185.211.4.42:3000/api/checkactivateprogram?servicename=${servicename}&email=${email}&password=${password}`;
    
}