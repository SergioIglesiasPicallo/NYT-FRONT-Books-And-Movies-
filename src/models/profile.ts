export type ProfileInput = {
    password: string;
    email: string;
};

export const normalizeProfile = (input : any) => {
    return{
        name:(input?.name ||'') as string,
        id:(input?.id ||'') as string,
        email:(input?.email ||'') as string,
    };
};
export type Profile = ReturnType<typeof normalizeProfile>;