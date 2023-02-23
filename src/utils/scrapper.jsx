import axios from "axios";
import * as cheerio from 'cheerio';

export const getData = async () =>{
    const {data} = await axios.get('https://stackoverflow.com/questions/34343218/node-error-cannot-find-module-lib-querystring');
    console.log(data)
    return data;
}