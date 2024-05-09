//an asynchronous function that accepts a message string and a delay time in milliseconds.
function delayedMessage(milliseconds){
    return new Promise(resolved => setTimeout(resolved,milliseconds));}
async function message(theMessage,time){
 await delayedMessage(time);
 console.log(theMessage);
};
message("There are 7 members in BTS",2000);


//an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
let userId = [202,203,204,205,206]
async function getUserData(id){
    const data= {id}
    return data
}
async function userData(userids){
    for (let id of userId){
        const data = await getUserData(id);
        console.log (data);
    }
};
userData(userId);

//a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
const task = true;
const myPromise = new Promise((resolve, reject)=>{
    if(task){
        resolve('I made it to Namsan Tower');
    }
    else{
        reject('I will try harder')
    }
})
myPromise.then((response)=>{
    console.log({response});
    console.log('I will put more effort')
})
.catch((error)=>{
    console.log({error});
    console.log('Keep trying')
})
.finally(()=>{
    console.log('I will go to Seoul')
})
console.log({task});
async function performTask(){
    try{
    console.log('This is my Dream')
    await task;
    }
    catch{
        console.log('Dream not fulfilled')
    }
}
performTask();

//Scenario
function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Maths.random();
    if (randomValue > failureProbability) {
    resolve(`${taskName} succeeded`);
    } else {
    reject(`${taskName} failed`);
    }
    });
   }
   async function execute(taskName, retries, failureProbability) {
    for (let i = 0; i <= retries; i++) {
    try {
    const result = await unstableTask(taskName, failureProbability);
    console.log(result);
    return;
    } catch (error) {
    console.log(error);
    if (i == retries) {
    throw new Error(`Failed after ${retries} retries`);
    }
    }
    }
   }
   execute("cook", 3, 0.5);





  