import * as axios from "axios";
///У слова async, которое ставится перед ф-ей один простой смысл: эта функция всегда возвращает промис
export  const tryCatch = async (f) => {

    try {

        //Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится
        const response = await f();
        console.log('answer: ', response.data.yourBody.success);
        return response.data.yourBody;
        // return response.data.yourBody.success;
    } catch (e) {
        console.log('error: ', {...e});
        console.log('error: ', {...e.response.data.yourBody});

        return {success: false};
    }
}

const instance=axios.create({baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'})

export const API={
    getSuccess(success){
        return instance.post('',
            {success: success}
        )
    }
}