
      let amar = {
        skills :"singer",
        amarskills:function(){

console.log(`amar skills is ${this.skills}`)
    }
      }

   
    let akhbar ={
        skills :"chef",

        akhbarskills:function(){

console.log(`akhbar skills is ${this.skills}`)
    }
    }
    let anthony ={
        skills:"magician",
        anthonySkills:function(){

console.log(`Anthony skills is ${this.skills}`)
},
    }

    amar.amarskills.call(akhbar)
    akhbar.akhbarskills.call(anthony)
    anthony.anthonySkills.call(amar)
