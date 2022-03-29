const schedule = require('node-schedule');

const arr = [
    {
        'text': 'textOne',
        'dateTime': '2022-03-29 10:03:00.000'
    },
    {
        'text': 'FullStack',
        'dateTime': '2022-03-29 10:04:00.000'
    },
    {
        'text': 'Backend',
        'dateTime': '2022-03-29 10:05:00.000'
    },
    {
        'text': 'Frontend',
        'dateTime': '2022-03-29 10:06:00.000'
    },
    {
        'text': 'React',
        'dateTime': '2022-03-29 10:07:00.000'
    },
    {
        'text': 'Node.js',
        'dateTime': '2022-03-29 10:08:00.000'
    },
    {
        'text': 'Express',
        'dateTime': '2022-03-29 10:09:00.000'
    },
    {
        'text': 'MongoDB',
        'dateTime': '2022-03-29 10:10:00.000'
    }, {
        'text': 'Programming',
        'dateTime': '2022-03-29 10:11:00.000'
    }, {
        'text': 'PatienceIsVirtue',
        'dateTime': '2022-03-29 10:12:00.000'
    },

]

 function scheduling(dayanddate,str){
    let len = str.length;
    setTimeout(() => {
        console.log(`Job ran @ ${dayanddate} and string is ${str}`)
       
   }, len*1000 )
}


 function schedule_jobs() {
    console.log("In schedule jobs function to schedule the jobs")
    arr.map((obj) => {
        let len = obj.text.length;
        let str = obj.text
        str = str.split('').reverse().join('');
        let dayanddate = obj.dateTime;

         schedule.scheduleJob( dayanddate, async ()=>{
          
            let res= scheduling(dayanddate,str)
        })
    })
}

module.exports=schedule_jobs;
