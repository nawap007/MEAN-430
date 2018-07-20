export function Model(validationRules: Array<ValidationRule> = []) {
    return (target: Function) => {
        /*tslint:disable no-any*/
        (<any>Reflect).defineMetadata('@Model', {rules: validationRules}, target);
        /*tslint:enable no-any*/
    };
}
export type ValidationRule = {
    name: string,
    isValid: (obj: {}) => boolean
};
