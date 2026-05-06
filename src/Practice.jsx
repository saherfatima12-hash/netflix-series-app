import { useState } from "react";
import Profile from "./Profile";
const Practice=()=> {
  return (
   <Profile
    name = "Bob"
    age = {25}
    greeting = {
    <div>
      <strong>
        "Hello Bob , keep up the great work!"
      </strong>
    </div>}
   >
  
    <p>Hobbies : gaming , Cooking</p>
   <button>Contact</button>
   </Profile>
  );
}
export default Practice;