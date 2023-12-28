import { defineStore } from 'pinia'

const UserList = defineStore('UserList', {
   state: () => ({
      users: [
         {
            name: 'Alex'
         },
         {
            name: 'Vasya'
         }
      ]
   }),

   getters: {
      Users: (state) => state.users,
   },

   actions: {
      Append(n)
      {
         this.users.push({
            name: n,
         })
      }
   }
})

setInterval(() => UserList().Append('fghsfhasfd hfajs'), 2000)

export { UserList }