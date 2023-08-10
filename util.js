
export const UTIL ={
    // First page
    next_step_1_2(next_one,box){
        return new Promise(function(resolve,reject) {
            next_one.addEventListener('click',function(event){
                event.preventDefault();

                document.getElementById("warningOne").style.visibility = `hidden`;
                document.getElementById("warningTwo").style.visibility = `hidden`;
                document.getElementById("warningThree").style.visibility = `hidden`;

                const name = document.getElementsByClassName("class1")[0].children[0].value;
                const email_address = document.getElementsByClassName("class2")[0].children[0].value;
                const phone_number = document.getElementsByClassName("class3")[0].children[0].value;
                const phone_no = parseInt(phone_number);
                const step1_data = [name,email_address,phone_no];
                
                    if (name === '' ||  email_address === '' || phone_number === ''){
                        if(name === ''){
                            document.getElementById("warningOne").style.visibility = `visible`;
                            document.getElementById("warningOne").innerText = `can't be empty`;

                        }
                        if(email_address === ''){
                            document.getElementById("warningTwo").style.visibility = `visible`;
                            document.getElementById("warningTwo").innerText = `can't be empty`;

                        }
                        
                        if(phone_number === ''){
                            document.getElementById("warningThree").style.visibility = `visible`;
                            document.getElementById("warningThree").innerText = `${phone_number} can't be empty`;
                        }
                        
                        
                        
                        // alert("Enter your info");
                    }else{
                        if(phone_number !== ''){ 
                            if(isNaN(phone_no)){
                                document.getElementById("warningThree").style.visibility = `visible`;
                                document.getElementById("warningThree").innerText = `Please enter number only!`;
                            }else{
                                box.innerHTML = `Name :-${name} \n  Email Address :-${email_address} \n Phone Number :-${phone_no}`;
                            }
                        }
                        
                        
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
