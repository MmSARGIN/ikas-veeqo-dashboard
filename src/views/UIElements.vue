<template>
  
 
  
  <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="
            inline-block
            min-w-full
            overflow-hidden
            align-middle
            border-b border-gray-200
            shadow
            sm:rounded-lg
          "
        >
          <table class="min-w-full bg-white">
            <thead class="w-full">
              <tr class="w-full">
                <th
                  class="
                  w-1/3
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                  Key
                </th>
                <th
                  class="
                  w-2/3
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                  Value
                </th>
                
               
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr  v-for="(u, index) in users" :key="index">
                <td
                  class="px-4 py-2  whitespace-nowrap"
                >
                  <div class="flex items-center w-full">
                    

                    
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ u.name }}
                      </div>
                   
                    </div>
                 
                </td>

               

                <td
                  class="px-4 py-2  whitespace-nowrap ">
                  <span
                    class="
                      
                      
                    "
                    ><input class="p-4 outline-indigo-600 w-full" type="text" name="status" id="status" v-model="u.status"></span
                  >
                </td>

              
                
  
          <td
                  class="
                  px-4
                   
                  "
                >
                <button class="w-full bg-emerald-500 px-6 py-2 hover:bg-emerald-600 rounded-xl text-white" @click="updateUser(user)">Save</button>
                </td>

                <!-- <td
                  class="
                    px-6
                    py-4
                    text-sm
                    font-medium
                    leading-5
                    text-right
                    border-b border-gray-200
                    whitespace-nowrap
                  "
                >
                  <div class="flex justify-around">
                    <span class="text-yellow-500 flex justify-center">
                      <a href="#" class="mx-2 px-2 rounded-md"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-green-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                      <form method="POST">
                        <button class="mx-2 px-2 rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-red-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </form>
                    </span>
                  </div>
                </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      users: [
        {
          id:1,
          name:"blabla",
          email:'blabla@gmail.com',
          status: 'test'
        }
      ],
      formVisible: false,
      form: {
         name: "",
         email: "",
         password: "",
      },
    }
  },
  mounted() {
    // Fetch the users from the server when the component is mounted
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      // axios.get('/users')
      //   .then(response => {
      //     this.users = response.data;
      //   })
      //   .catch(error => {
      //     // Handle any errors
      //   });
    },
    createUser() {
      // Open a form to create a new user
        this.formVisible = true;

        // Clear the form fields
        this.form.name = '';
        this.form.email = '';
        this.form.password = '';
    },
    updateUser(user) {
      // Open a form to edit the specified user
    },
    deleteUser(user) {
      // axios.delete(`/users/${user.id}`)
      //   .then(response => {
      //     // Remove the user from the list
      //     this.users = this.users.filter(u => u.id !== user.id);
      //   })
      //   .catch(error => {
      //     // Handle any errors
      //   });
    }
  }
}
</script>