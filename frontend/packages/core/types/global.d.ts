declare global {
    interface Window {
        __visualdl_instance_id__?: string | string[];
    }

    namespace globalThis {
        // eslint-disable-next-line no-var
        var __visualdl_instance_id__: string | string[] | undefined;
    }
}

declare namespace NodeJS {
    interface Global {
        __visualdl_instance_id__?: string | string[];
    }
}

export {};