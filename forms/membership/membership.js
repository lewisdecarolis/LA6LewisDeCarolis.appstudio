
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


btnMember.onclick=function(){
  if (members.includes(inptMember.value))
  lblMember.value = "You are already a member"
  else 
   lblMember.value = members.push(inptMember.value) && "You are now a member"
}
