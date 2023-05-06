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
        Success: {{ constants.success }}
        <span v-show="constants.message"><br> Message: {{ constants.message }} </span>
          <table class="min-w-full bg-white">
            <thead class="w-full">
              <tr class="w-full">
                <th
                  class="
                  w-1/5
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
                  w-4/5
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
              <tr v-for="(u, id) in constants.data" :key="id">
                <td class="px-4 py-2  whitespace-nowrap">
                  <div class="flex items-center w-full">
                    

                    
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ u.key }}
                      </div>
                   
                    </div>
                 
                </td>

               

                <td class="px-4 py-2  whitespace-nowrap ">
                  <span class="">
                    <input class="p-4 outline-indigo-600 w-full" type="text" name="status" id="status" v-model="u.value">
                  </span>
                </td>

              
                
  
          <td
                  class="
                  px-4
                   
                  "
                >
                <button class="w-full bg-emerald-500 px-6 py-2 hover:bg-emerald-600 rounded-xl text-white" @click="updateConstant(id+1)">Save</button>
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

<script setup lang="ts">
import { onMounted, reactive, onUpdated } from "vue";
interface Constant {
  id: number,
  key: string,
  value: string
}

interface Constants {
  data: [Constant],
  success: string,
  message: string
}

const constants: Constants = reactive({
  data: [
    {
      id: 0,
      key: "",
      value: ""
    },
  ],
  success: "",
  message: ""
}) 

onMounted(async () => {
  await fetchConstants();
})

// onUpdated(async () => {
//   await fetchConstants();
// })


async function fetchConstants(): Promise<void> {
  const API_URL = 'http://sirri.fthyuksel.com/api/v1';
  console.log(API_URL);
  const token = localStorage.getItem("token");

  const url = API_URL + "/constants";
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      "Authorization": "Bearer " + token
    },
  };

  fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log('data fetch: ', data);
    // constants.data = data?.data.sort((a: any, b: any) => a.id.localeCompare(b.id));
    constants.data = data?.data.sort((a: any, b: any) => { return a.id - b.id});
    constants.success = data?.success;
  })
}



async function updateConstant(id: number): Promise<void> {
  const API_URL = 'http://sirri.fthyuksel.com/api/v1';
  console.log(API_URL);
  const token = localStorage.getItem("token");
  console.log('constant update: ', constants.data[id-1])

  const url = API_URL + "/constants/" + id;
  const options = {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(constants.data[id-1])
  };

  fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log('data fetch: ', data);
    constants.message = data?.message;
    async function timedf(cons: any): Promise<void> {
      setTimeout(() => {cons.message = null}, 1500)
    }
    timedf(constants);
    // constants.data = data?.data;
    // constants.success = data?.success;
  })
}


// import axios from 'axios';

// http://sirri.fthyuksel.com/api/v1/logs/
// Bearer 4|xvuFHl1aVWXeuEE21NiYu5FER0vimuBlvH8eb585
// GET
// {
//   "success": true,
//   "data":[
//     {"id": 10, "key": "key", "type": "string", "value": "1"…},
//     {"id": 9, "key": "veeqo_since_id", "type": "string", "value": "132784699"…},
//     {"id": 8, "key": "ikas_stock_location_id", "type": "string", "value": "dfea35a0-09cb-4ea5-918c-960bd010e65d"…},
//     {"id": 7, "key": "veeqo_channels", "type": "json", "value": "[{\"currency_code\":\"GBP\",\"channel_id\":\"100513\"},{\"currency_code\":\"EUR\",\"channel_id\":\"102832\"},{\"currency_code\":\"USD\",\"channel_id\":\"102833\"}]"…},
//     {"id": 6, "key": "veeqo_api_key", "type": "string", "value": "b4d1b520a06b322531078c02b1c662aa"…},
//     {"id": 5, "key": "veeqo_url", "type": "string", "value": "https://api.veeqo.com/"…},
//     {"id": 4, "key": "ikas_client_secret", "type": "string", "value": "s_idutGEEahgY58ndLbfiMAixgd9836ded3adf4c64b4af14b7db90fd95"…},
//     {"id": 3, "key": "ikas_client_id", "type": "string", "value": "4df41fe6-e76e-4953-88a7-43981a76814e"…},
//     {"id": 2, "key": "ikas_auth_url", "type": "string", "value": "https://umit.myikas.com/api/admin/oauth/token"…},
//     {"id": 1, "key": "ikas_url", "type": "string", "value": "https://api.myikas.com/api/v1/admin/graphql"…}
//   ],
//   "pagination":{
//     "total": 10,
//     "perPage": 15,
//     "currentPage": 1,
//     "lastPage": 1,
//     "from": 1,
//     "to": 10
//   }
// }

// export default {
//   data() {
//     return {
//       users: [
//         {
//           id:1,
//           name:"blabla",
//           email:'blabla@gmail.com',
//           status: 'test'
//         }
//       ],
//       formVisible: false,
//       form: {
//          name: "",
//          email: "",
//          password: "",
//       },
//     }
//   },
//   mounted() {
//     // Fetch the users from the server when the component is mounted
//     this.fetchUsers();
//   },
//   methods: {
//     fetchUsers() {
//       // axios.get('/users')
//       //   .then(response => {
//       //     this.users = response.data;
//       //   })
//       //   .catch(error => {
//       //     // Handle any errors
//       //   });
//     },
//     createUser() {
//       // Open a form to create a new user
//         this.formVisible = true;

//         // Clear the form fields
//         this.form.name = '';
//         this.form.email = '';
//         this.form.password = '';
//     },
//     updateUser(user) {
//       // Open a form to edit the specified user
//     },
//     deleteUser(user) {
//       // axios.delete(`/users/${user.id}`)
//       //   .then(response => {
//       //     // Remove the user from the list
//       //     this.users = this.users.filter(u => u.id !== user.id);
//       //   })
//       //   .catch(error => {
//       //     // Handle any errors
//       //   });
//     }
//   }
// }
</script>