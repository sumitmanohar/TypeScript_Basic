class YoutubeVideo{
    protected title : string
    protected views : number
    protected likes : number
    protected dislikes :number
    protected comments : string
    protected datePublished : string
    protected channelName : string
    protected channelSubscribers :number
    constructor(_title:string,_views:number,_likes:number,_dislikes:number,_comments:string,_datePublished:string,_channelName:string,_channelSubscribers:number){
      this.title=_title
      this.views=_views
      this.likes=_likes
      this.dislikes=_dislikes
      this.comments=_comments
      this.datePublished=_datePublished
      this.channelName=_channelName
      this.channelSubscribers=_channelSubscribers
    }
    get_title=()=>{
     return this.title
    }
    get_views=()=>{
        return this.views
    }
    get_likes=()=>{
        return this.likes
    }
    get_dislikes=()=>{
        return this.dislikes
    }
    get_comments=()=>{
        return this.comments
    }
    get_datePublished=()=>{
        return this.datePublished
    }
    get_channelName=()=>{
        return this.channelName
    }
    get_channelSubscribers=()=>{
        return this.channelSubscribers
    }
    set_title=(_title:string)=>{
     return this.title=_title
    }
   
    set_views=(_views:number)=>{
        return this.views=_views
    }
    set_likes=(_likes:number)=>{
           return this.likes=_likes
    }
       set_dislikes=(_dislikes:number)=>{
           return this.dislikes=_dislikes
       }
       set_comments=(_comments:string)=>{
           return this.comments=_comments
       }
       set_datePublished=(_datePublished:string)=>{
           return this.datePublished=_datePublished
       }
       set_channelName=(_channelName:string)=>{
           return this.channelName=_channelName
       }
       set_channelSubscribers=(_channelSubscribers:number)=>{
           return this.channelSubscribers=_channelSubscribers
       }

}



class TredingVideo extends YoutubeVideo{
 protected on_Treading:number
 constructor(_title:string,_views:number,_likes:number,_dislikes:number,_comments:string,_datePublished:string,_channelName:string,_channelSubscribers:number,_on_Treading:number){
     super(_title,_views,_likes,_dislikes,_comments,_datePublished,_channelName,_channelSubscribers)
     this.on_Treading=_on_Treading
 }
 get_title=()=>{
    return this.title
   }
   get_views=()=>{
       return this.views
   }
   get_likes=()=>{
       return this.likes
   }
   get_dislikes=()=>{
       return this.dislikes
   }
   get_comments=()=>{
       return this.comments
   }
   get_datePublished=()=>{
       return this.datePublished
   }
   get_channelName=()=>{
       return this.channelName
   }
   get_channelSubscribers=()=>{
       return this.channelSubscribers
   }
   get_onTreading=()=>{
     return this.on_Treading
 }
 set_title=(_title:string)=>{
    return this.title=_title
   }
  
   set_views=(_views:number)=>{
       return this.views=_views
   }
   set_likes=(_likes:number)=>{
          return this.likes=_likes
   }
      set_dislikes=(_dislikes:number)=>{
          return this.dislikes=_dislikes
      }
      set_comments=(_comments:string)=>{
          return this.comments=_comments
      }
      set_datePublished=(_datePublished:string)=>{
          return this.datePublished=_datePublished
      }
      set_channelName=(_channelName:string)=>{
          return this.channelName=_channelName
      }
      set_channelSubscribers=(_channelSubscribers:number)=>{
          return this.channelSubscribers=_channelSubscribers
      }
      set_onTreading=(_on_Treading:number)=>{
        return this.on_Treading=_on_Treading
    }
}


let NickyJamTv=new YoutubeVideo('Live It Up (Official Video) ',524545474,65454,12,"The best accidental listening I have done on You Tube!  Awesome","jun 8 2018","NickyJamTv",14545545)
let LilUziVert=new YoutubeVideo('XO TOUR Llif3',454848666,454864,13,"Addicted to it ","May 10 2018","LilUziVert",546548748)
let PostMalone=new YoutubeVideo('Rockstar',457845455,87874,5,"STOP BEING SO GOOD","jun 15 2018","PostMalone",46546848)
let MigosATL=new TredingVideo("Bad and Boujee ft Lil Uzi Vert",8687846545,545456,2,"Train drop, dip drop, and i want that grass with cheese drop ohh.","oct 31 2016","MigosATL",93254454,1)
console.log(`Title Name :${LilUziVert.get_title()}`)
console.log(`Channel Name :${LilUziVert.get_channelName()}`)
console.log(`Date Released :${NickyJamTv.get_datePublished()}`)
console.log(`Comment :${NickyJamTv.get_comments()}`)
console.log(`Views :${PostMalone.get_views()}`)
console.log(`Title Name:${PostMalone.get_title()}`)
let change=PostMalone.set_channelName("@@@PostMalone@@@")
console.log(`Change the Channel Name :${change}`)
console.log(`Treading  :${MigosATL.get_onTreading()}`)
