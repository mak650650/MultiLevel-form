
export const UTIL ={
    // First page
    next_step_1_2(next_one,box){
        return new Promise(function(resolve,reject) {
            next_one.addEventListener('click',function(event){
                event.preventDefault();
                const name = document.getElementsByClassName("class1")[0].children[0].value;
                const email_address = document.getElementsByClassName("class2")[0].children[0].value;
                const phone_number = parseInt(document.getElementsByClassName("class3")[0].children[0].value);
                const step1_data = [name,email_address,phone_number];
                
                    if (name === '' ||  email_address === '' || phone_number === NaN){
                        if(email_address === ''){
                            document.getElementById("warningTwo").style.visibility = `visible`;
                        }
                        if(name === ''){
                            document.getElementById("warningOne").style.visibility = `visible`;
                        }
                        // alert("Enter your info");
                    }else{
                        box.innerHTML = `Name :-${name} \n  Email Address :-${email_address} \n Phone Number :-${phone_number}`;
                    }
                    
                resolve(step1_data);
                reject("ERROR IN PROCESSING");
            });
        })
    },
    // Second page
    previous_step_2_1(previous , box){},
    next_step_2_3(next_two,box){},

    // Third page
    previous_step_3_2(previous , box){},
    next_step_3_4(next_two,box){},

    // Fourth page
    previous_step_4_3(previous , box){},
    next_step_4_complete(next_two,box){},


}