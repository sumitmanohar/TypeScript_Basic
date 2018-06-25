class Facebook{
    protected StoriesFriendName:string
    protected Comment:string
    protected Images:any
    protected Video:any
    constructor(_StoriesFriendName:string,_Images:any,_Video:any,_Comment:string){
        this.StoriesFriendName=_StoriesFriendName
        this.Comment=_Comment
        this.Images=_Images
        this.Video=_Video

    }
    get_StoriesFriendName=()=>{
       return this.StoriesFriendName
    }
    get_Comment=()=>{
   return this.Comment
    }
    get_Images=()=>{
        return this.Images
    }
    get_Video=()=>{
        return this.Video
    }
    set_StoriesFriendName=(_StoriesFriendName:string)=>{
        return this.StoriesFriendName=_StoriesFriendName
     }
     set_Comment=(_Comment:string)=>{
    return this.Comment=_Comment
     }
     set_Images=(_Images:any)=>{
         return this.Images=_Images
     }
     set_Video=(_Video:any)=>{
         return this.Video=_Video
     }
    



}




class Profile extends Facebook{
   protected FullName: string
   protected Gender : string
   protected BirthDate : string
   protected Work : string
   protected Education : string
   protected Hometown : string
   protected Siblings : number
   protected Friends : number
   constructor(_StoriesFriendName:string,_Images:any,_Video:any,_Comment:string,_FullName : string,_Gender : string,_BirthDate : string,_Work : string,_Education : string,_Hometown : string,_Siblings : number,_Friends : number){
    super(_StoriesFriendName,_Images,_Video,_Comment)
    this.FullName=_FullName
    this.Gender=_Gender
    this.BirthDate=_BirthDate
    this.Work=_Work
    this.Education=_Education
    this.Hometown=_Hometown
    this.Siblings=_Siblings
    this.Friends=_Friends

   }

   get_FullName=()=>{
       return this.FullName
   }
   get_Gender=()=>{
       return this.Gender
   }
   get_BirthDate=()=>{
       return this.BirthDate
   }
   get_Work=()=>{
       return this.Work
   }
   get_Education=()=>{
       return this.Education
   }
   get_Hometown=()=>{
       return this.Hometown
   }
   get_Siblings=()=>{
       return this.Siblings
   }
   get_Friends=()=>{
       return this.Friends
   }
   set_FullName=(_FullName:string)=>{
    return this.FullName=_FullName
}
set_Gender=(_Gender:string)=>{
    return this.Gender=_Gender
}
set_BirthDate=(_BirthDate:string)=>{
    return this.BirthDate=_BirthDate
}
set_Work=(_Work:string)=>{
    return this.Work=_Work
}
set_Education=(_Education:string)=>{
    return this.Education=_Education
}
set_Hometown=(_Hometown:string)=>{
    return this.Hometown=_Hometown
}
set_Siblings=(_Siblings:number)=>{
    return this.Siblings=_Siblings
}
set_Friends=(_Friends:number)=>{
    return this.Friends=_Friends
}
   


get_StoriesFriendName=()=>{
    return this.StoriesFriendName
 }
 get_Comment=()=>{
return this.Comment
 }
 get_Images=()=>{
     return this.Images
 }
 get_Video=()=>{
     return this.Video
 }
 set_StoriesFriendName=(_StoriesFriendName:string)=>{
     return this.StoriesFriendName=_StoriesFriendName
  }
  set_Comment=(_Comment:string)=>{
 return this.Comment=_Comment
  }
  set_Images=(_Images:any)=>{
      return this.Images=_Images
  }
  set_Video=(_Video:any)=>{
      return this.Video=_Video
  }
 
}
let Sumit=new Profile("Noman Shaikh","PHOTO","VIDEO","nice","Sumit Manohar","Male","24 May 1997","Student","TYBSCIT","MUMBAI",1,250)
let Raj=new Profile("Sujeet Gupta","PHOTO123","VIDEO123","nice to meet you","Raj Jaiswal","Male","15 Nov 1995","Accenture","MUMABI",'TYBCOM',3,100)
console.log(`FullName :${Sumit.get_FullName()}`)
console.log(`BirthDate :${Sumit.get_BirthDate()}`)
console.log(`Work :${Raj.get_Work()}`)
console.log(`HomeTown :${Raj.get_Hometown()}`)
console.log(`StoriesFriendName :${Raj.get_StoriesFriendName()}`)
let change=Raj.set_StoriesFriendName("Pritesh Jadhav")
console.log(`Change StoriesFriendName :${change}`)





