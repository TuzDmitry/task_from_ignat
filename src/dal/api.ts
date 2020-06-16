import axios, {AxiosResponse} from "axios";

const instance = axios.create({baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'})


///У слова async, которое ставится перед ф-ей один простой смысл: эта функция всегда возвращает промис
export const tryCatch = async (f: () => Promise<AxiosResponse<MadeQueryResponseType>>) => {

    try {

        //Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится
        const response = await f();
        console.log('answer: ', response.data.yourBody.success);
        debugger
        return response.data.yourBody;
        // return response.data.yourBody.success;
    } catch (e) {
        console.log('error: ', {...e});
        console.log('error: ', {...e.response.data.yourBody});

        return {success: false};
    }
}

type SuccessType = {
    success: boolean
}

type MadeQueryResponseType = {
    errorText: string
    info: string
    yourBody: SuccessType
    yourQuery: {}
}

// export  type ResType = {
//     config?: {
//         url: "",
//         method: "post",
//         data: SuccessType,
//         headers: any,
//         baseURL: string
//     }
//     data: MadeQueryResponseType
//     headers?: any
//     request?: any
// status?: number
// statusText?: string
// }


export const API = {
    getSuccess(success: boolean) {
        debugger
        return instance.post<MadeQueryResponseType>(
            '',
            {success: success}
        )
    }
}