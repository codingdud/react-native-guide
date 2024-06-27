export const validateLen=(val:string|undefined)=>{
    return (val?.length ?? 0) >=4;
}
export const validateEmailOrPhoneNumber = (val: string | undefined): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    return emailRegex.test(val ?? '') || phoneRegex.test(val ?? '');
}