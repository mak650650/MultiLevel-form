import { UTIL } from "./util.js";

const box = document.getElementsByClassName("box")[0];
const next_one =document.getElementsByClassName("submitContainer_one")[0].children[0];


const APP ={
    init(){
        UTIL.next_step_1_2(next_one ,box).then(
            (res)=>{
                const step1_data = res;
                console.log(step1_data);
                
            },
            (error)=>{
                console.error(error)
            }
        )
    }
}
APP.init();