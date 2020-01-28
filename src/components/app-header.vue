<template>
  <div class="header content-start shadow-lg font-medium text-base">
     <div id="app">
       <div class=".fade">
         <div>
           <nav class="flex items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-black mr-6">            
              <a href="/" class="font-semibold text-xl tracking-tight">
                <img src="@/assets/logo.png" alt="Tingg" class="h-9 w-12 mr-12 ml-2" >
              </a>             
            <div>
              <div>
                <ul>
                  <li>
                    <a href="/discover" class=" text-left">
                      <img src="@/assets/search.png" class="h-6 w-9" alt="Search">                    
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <ul>
              <li>
                <a href="/discover" class="m-3 text-sm">
                  Discover
                </a>
                <a href="/createGroup" class="m-3 text-sm">
                Create a Group
                </a>
                <a href="/components/app-about" class="m-3 text-sm">
                About us
                </a>
              </li>
            </ul>
          </div>
            <div>
              <ul class=".justify-content-md-end mr-10">
                <li>
                  <a href="./login" class=" bg-transparent border-transparent rounded-lg hover:bg-blue-200 inline-block text-sm px-4 py-2 leading-none text-black mt-4 lg:mt-0">
                    Login
                  </a>

                  <a href="./createGroup" class="bg-transparent border-transparent rounded-lg hover:bg-blue-200 inline-block text-sm px-4 py-2 leading-none text-black mt-4 lg:mt-0">
                    Create Group
                  </a>
                </li>
              </ul>                
            </div>
          </nav>            
        </div>
      </div>         
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app_header',
  props: {
    msg: String
  }
}
</script >

<style >

</style>
