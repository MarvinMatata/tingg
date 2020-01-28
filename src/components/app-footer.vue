<template >
    <div class="footer">
		<footer>
			<div id="app" class="content-end tingg-gradient font-medium">
				<section class="bg-white py-8 w-full">
					<div class="container mx-auto px-8">
						<div class="table w-full">
							<div class="block sm:table-cell ">
								<p class="uppercase  text-white-100 text-sm font-medium sm:mb-6">This is us</p>
								<ul class="list-reset text-xs mb-6">
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/our-story/" class="capitalize text-white-100 hover:text-white-100">Our Story</a>
									</li>
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/our-people/" class="capitalize text-white-100 hover:text-white-100">Our People</a>
									</li>
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/join-us/" class=" capitalize text-white-100 hover:text-white-100">Join us </a>
									</li>
									<li class="inline-block m-2">
										<a href="/" class="font-semibold text-xl tracking-tight">
											<img src="@/assets/logo.png" alt="Twitter" class="h-12 w-15" >
										</a>
									</li>
								</ul>
							</div>
							<div class="block sm:table-cell">
								<p class="uppercase text-white-100 text-sm sm:mb-6 font-medium">About</p>
								<ul class="list-reset text-xs mb-6">
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/welcome-to-cellulant/" class=" capitalize text-white-100 hover:text-white-100">Our Mission</a>
									</li>
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/" class=" capitalize text-white-100 hover:text-white-100">Company</a>
									</li>
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/jobs/" class=" capitalize text-white-100 hover:text-white-100">Jobs</a>
									</li>
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://cellulant.com/blog/" class=" capitalize text-white-100 hover:text-white-100">Blog</a>
									</li>
								</ul>
							</div>
							<div class="block sm:table-cell">
								<p class="uppercase  text-sm sm:mb-6 text-white-100 font-medium">Products</p>
								<ul class="list-reset text-xs mb-6">
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/mula/" class=" capitalize text-white-100 hover:text-white-100">Mula</a>
									</li>
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/tingg/" class=" capitalize text-white-100 hover:text-white-100 ">Tingg</a>
									</li>
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/agrikore/" class=" capitalize text-white-100 hover:text-white-100">Agrikore</a>
									</li>
								</ul>
							</div>
							<div class="block sm:table-cell">
								<p class="uppercase text-white-100 text-sm sm:mb-6 font-medium">Contact us</p>
								<ul class="list-reset text-xs mb-6">
									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/contact/" class=" capitalize text-white-100 hover:text-white-100">Email us</a>
									</li>

									<li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
										<a href="https://www.cellulant.com/contact/" class=" capitalize text-white-100 hover:text-white-100">Live Chat</a>
									</li>

									<li class="inline-block mr-2 mt-2 mb-2">
										<a href="https://www.facebook.com/cellulant" class="font-semibold text-xl tracking-tight">
											<img src="@/assets/facebook-logo.png" alt="Facebook" class="h-6 w-6" >
										</a>							
									</li>
									<li class="inline-block m-2">
										<a href="https://www.instagram.com/cellulant/" class="font-semibold text-xl tracking-tight">
											<img src="@/assets/instagram-logo.png" alt="Instagram" class="h-6 w-6" >
										</a>								
									</li>
									<li class="inline-block m-2" >
										<a href="https://www.linkedin.com/company/cellulant/" class="font-semibold text-xl tracking-tight">
											<img src="@/assets/linkedin-logo.png" alt="Linkedin" class="h-6 w-6" >
										</a>								
									</li>
									<li class="inline-block m-2">
										<a href="https://twitter.com/cellulant" class="font-semibold text-xl tracking-tight">
											<img src="@/assets/twitter-logo.png" alt="Twitter" class="h-6 w-6" >
										</a>
									</li>
								</ul>			
							</div>
						</div>
					</div>
				</section>
			</div>
		</footer>
    </div>	
</template>

<script>
export default {
    name:'app_footer',
    props:{
        msg:String
    }
}
</script>

<style scoped>
.tingg-gradient{
background: linear-gradient(90deg, rgba(250,55,67,1) 11%, rgba(74,60,148,1) 100%);
}

</style>