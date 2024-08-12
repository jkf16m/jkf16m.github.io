export type Props = {
    translationKey: string;
    role: string;
    mainTechnology: string;
    usedTechnologies: [string|undefined, string|undefined][];
    secondaryRole: string;
    remarksCount: number;
}