d<template>
  <div class="h-screen">
    <div class="">
      <div class="flex ">
        <div class="w-4/12"></div>
        <div class="w-4/12 font-semibold flex justify-center items-center text-4xl text-indigo-600">
          Bulk Updates Stocks
        </div>
        <div class="w-4/12 flex justify-center items-center p-4">
            <button @click="updateAllStocks" class="px-6 py-4 flex  justify-evenly  hover:bg-red-700 bg-red-600 rounded-xl text-xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>


  Update All Stocks</button>
        </div>
       
       
      </div>

      <div class="teal-500 flex flex-col justify-center items-center">
        <div>
          <textarea
            class="rounded-2xl p-6 text-2xl outline-indigo-600"
            cols="100"
            rows="10"
          ></textarea>
        </div>
        <div class="w-1/3 flex mt-6 justify-end items-center">
          <button
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

<script>
export default {
  data(){
    return{
      
    }
  },
  methods: {
    updateAllStocks(){
      confirm('Are you sure that ??? You can`t turn back !!!')
    }
  }
}
</script>