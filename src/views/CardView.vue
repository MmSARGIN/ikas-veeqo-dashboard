<template>
  <div class="h-screen">
    <div class="">
      <div class="flex py-10">
        <div class="w-4/12"></div>
        <div class="w-4/12 font-semibold flex justify-center items-center text-4xl text-indigo-600">
          Bulk Updates Stocks
        </div>
        <!-- <div class="w-4/12 flex justify-center items-center p-4">
            <button @click="updateAllStocks" class="px-6 py-4 flex  justify-evenly  hover:bg-red-700 bg-red-600 rounded-xl text-xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>


  Update All Stocks</button>
        </div> -->
       
       
      </div>

      {{ skuList.split('\n').join(', ') }}
      <span v-show="success"><br> Success: {{ success }} </span>


      <div class="teal-500 flex flex-col justify-center items-center">
        <div>
          <textarea
            v-model="skuList"
            class="rounded-2xl p-6 text-2xl outline-indigo-600"
            cols="100"
            rows="10"
          ></textarea>
        </div>
        <div class="w-1/3 flex mt-6 justify-end items-center">
          <button @click="updateSelected"
            class="px-6 py-4 flex justify-evenly items-center w-full hover:bg-indigo-700 bg-indigo-600 rounded-xl text-3xl text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            Update Selected
          </button>
          <!-- <button class=" px-6 py-4 flex  justify-evenly w-1/3 hover:bg-indigo-700 bg-indigo-600 rounded-xl text-xl text-white">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
  Update All Stocks</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";

let success = ref(false);
const skuList = ref("");
// console.log('trimmed: ', skuList.value.trim().split(' '))
let skuListToUpdate = computed(() => skuList.value.split('\n'));
// let skuListToUpdate = ref(skuList.value.trim().split(' '));
// const skuListToUpdate = ref(skuList.value.trim().split(' '));
// console.log("skuListToUpdate: ", skuListToUpdate.value)
// skuList.trim().split(/\s+/).join(',')

// watch(skuList, () => {
//   console.log("skuList watch: ", skuList)
//   skuListToUpdate = computed(() => skuList.value.trim().split('\n'));
// });

async function updateSelected(): Promise<void> {
  console.log('updateSelected: ', skuListToUpdate)
  confirm('Are you sure that ??? You can`t turn back !!!')
  console.log('update selected stocks started.')

  const API_URL = 'http://sirri.fthyuksel.com/api/v1';
  console.log(API_URL);
  const token = localStorage.getItem("token");

  const url = API_URL + "/ikas/update-stocks-from-veeqo-by-sku";
  const options = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({sku_list: skuListToUpdate.value})
  };

  fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log('updateSelected(): ', data);
    // success.value = data.success;
    // success.value = true;
    // constants.data = data?.data.sort((a: any, b: any) => a.id.localeCompare(b.id));
    // constants.data = data?.data.sort((a: any, b: any) => { return a.id - b.id});
    // constants.success = data?.success;
  })
}



// async function updateConstant(id: number): Promise<void> {
//   const API_URL = 'http://sirri.fthyuksel.com/api/v1';
//   console.log(API_URL);
//   const token = localStorage.getItem("token");
//   console.log('constant update: ', constants.data[id-1])

//   const url = API_URL + "/constants/" + id;
//   const options = {
//     method: "PUT",
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json;charset=UTF-8",
//       "Authorization": "Bearer " + token
//     },
//     body: JSON.stringify(constants.data[id-1])
//   };

//   fetch(url, options)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('data fetch: ', data);
//     constants.data = data?.data;
//     constants.success = data?.success;
//   })
// }

</script>