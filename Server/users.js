const users=[];
const addUsers=({id,name,room})=>{
name=name.trim().toLowerCase();
room=room.trim().toLowerCase();
const existingUser=users.find((user)=>user.room===room&&user.name===name);
if(existingUser){
    return {error:'Username is taken'};
}

const user ={id,name,room}
users.push(user);
return {user}
}


const RemovUser=({id})=>{
const index=users.findIndex((user)=>user.id===id);
if(index!==-1){
    return users.splice(index,1)[0]
}
}


const getUser=(id)=>{
    users.find((user)=>user.id===id)

}



const getUSerRoom=(room)=>{
    users.filter((user)=>user.room===room)

}
module.exports={addUsers,RemovUser,getUSerRoom,getUser}